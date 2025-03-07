import "./NewHymn.css";

import Header from "../../Sub Components/Header/Header";
import HymnLyrics from "../../Sub Components/Hymn Lyrics/HymnLyrics";
import { useState } from "react";

const NewHymn = () => {
  const [hymnLyrics, setHymnLyrics] = useState([]);

  let hymnLyricsNum = hymnLyrics.length + 1;

  const addLyrics = () => {
    setHymnLyrics([...hymnLyrics, <HymnLyrics index={hymnLyricsNum} />]);
  };

  const resetHymnLyrics = () => {
    setHymnLyrics([]);
  };

  return (
    <main className="new_hymn_main">
      <Header link={"/"} />
      <section className="new_hymn_title">
        <div>
          <label htmlFor="">Hymn Title</label>
          <input placeholder="Enter hymn title" />
        </div>
      </section>

      {/* Hymn Lyrics section */}
      <section className="new_hymn_lyrics_sec">
        <label>Hymn Lyrics</label>
        {hymnLyrics}
        <button onClick={addLyrics} disabled={hymnLyricsNum > 5 && true}>
          + Add lyrics
        </button>
      </section>
      <section className="new_hymn_btn_sec">
        <button onClick={resetHymnLyrics}>Reset</button>
        <button>Save</button>
      </section>
    </main>
  );
};

export default NewHymn;
