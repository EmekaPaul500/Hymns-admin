import "./NewHymn.css";

import Header from "../../Sub Components/Header/Header";
import { HymnContext } from "../../Hymncontext";
import HymnLyrics from "../../Sub Components/Hymn Lyrics/HymnLyrics";
import Overlay from "../Overlay/Overlay"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const NewHymn = () => {
  const [title, setTitle] = useState("");
  const [composer, setComposer] = useState("");
  const [hymnLyrics, setHymnLyrics] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [error, setError] = useState("");   // <--- NEW ERROR STATE

  const { addHymn } = useContext(HymnContext);
  const navigate = useNavigate();

  // handle selection from overlay
  const handleSelect = (type) => {
    if (type === "stanza") {
      const stanzaNum = hymnLyrics.filter((l) => l.type === "stanza").length + 1;

      setHymnLyrics([
        ...hymnLyrics,
        {
          type: "stanza",
          number: stanzaNum,
          text: ""
        },
      ]);
    }

    if (type === "chorus") {
      setHymnLyrics([
        ...hymnLyrics,
        {
          type: "chorus",
          number: null,
          text: ""
        },
      ]);
    }

    setShowOverlay(false);
  };

  // Update text inside each hymn section
  const updateLyrics = (index, newText) => {
    const updated = [...hymnLyrics];
    updated[index].text = newText;
    setHymnLyrics(updated);
  };

  // Reset Hymn
  const resetHymnLyrics = () => {
    setHymnLyrics([]);
  };

  // Save Hymn with VALIDATION
  const saveHymn = () => {
    // VALIDATION STARTS HERE
    if (!title.trim()) {
      setError("Please enter a hymn title.");
      return;
    }

    if (!composer.trim()) {
      setError("Please enter the composer's name.");
      return;
    }

    if (hymnLyrics.length === 0) {
      setError("Please add at least one stanza or chorus.");
      return;
    }

    const emptySection = hymnLyrics.find((item) => item.text.trim() === "");
    if (emptySection) {
      setError("One or more lyrics sections are empty. Please fill them.");
      return;
    }

    // If everything is valid — CLEAR ERROR
    setError("");

    const hymn = {
      title,
      composer,
      lyrics: hymnLyrics,
    };

    addHymn(hymn);

    navigate("/success"); // Move to your success page
  };

  return (
    <main className="new_hymn_main">
      <Header link={"/"} />

      {/* ERROR MESSAGE */}
      {error && (
        <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      <section className="new_hymn_title">
        <div>
          <label>Hymn Title</label>
          <input 
            placeholder="Enter hymn title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </section>

      <section className="new_hymn_composer">
        <div>
          <label>Composer</label>
          <input 
            placeholder="Enter Composer's Name"
            value={composer}
            onChange={(e) => setComposer(e.target.value)}
          />
        </div>
      </section>

      <section className="new_hymn_lyrics_sec">
        <label>Hymn Lyrics</label>
        {hymnLyrics.map((item, i) => (
          <HymnLyrics
            key={i}
            index={item.number}
            type={item.type}
            onChangeText={(text) => updateLyrics(i, text)}
          />
        ))}

        <button onClick={() => setShowOverlay(true)}>
          + Add lyrics
        </button>
      </section>

      <section className="new_hymn_btn_sec">
        <button onClick={resetHymnLyrics}>Reset</button>
        <button onClick={saveHymn}>Save</button>
      </section>

      {showOverlay && (
        <Overlay
          onClose={() => setShowOverlay(false)}
          onSelect={handleSelect}
        />
      )}
    </main>
  );
};

export default NewHymn;
