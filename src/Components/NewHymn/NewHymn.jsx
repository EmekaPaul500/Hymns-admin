import "./NewHymn.css";

import Header from "../../Sub Components/Header/Header";
import HymnLyrics from "../../Sub Components/Hymn Lyrics/HymnLyrics";

const NewHymn = () => {
  return (
    <main>
      <Header link={"/"} />
      <section className="new_hymn_title">
        <div>
          <label htmlFor="">Hymn Title</label>
          <input placeholder="Enter hymn title" />
        </div>
      </section>
      <section>
        <HymnLyrics />
        <button> + Add lyrics</button>
      </section>
      <section>
        <button>Reset</button>
        <button>Save</button>
      </section>
    </main>
  );
};

export default NewHymn;
