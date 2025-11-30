import "./Hymn.css";
import { Form } from "react-router-dom";

const Hymn = ({ index, title, lyrics = [] }) => {

  console.log({ index, title, lyrics });

  // Safely get first lyric text (handles empty array)
  const firstLine = lyrics?.[0]?.text ?? "";

  return (
    <section className="hymn-sec">
      <figure className="hymn-music-note">
        <img src="/Images/music-note-01.png" alt="Music note" />
      </figure>

      <div className="hymn-div">
        <h4>{index}. {title}</h4>
        
        <p>{firstLine}</p>

        {/* Button Div */}
        <div className="hymn-btn-div">
          <Form>
            <button>
              <img src="/Images/edit.png" alt="Edit" />
              Edit
            </button>
          </Form>
          <Form>
            <button>
              <img src="/Images/delete.png" alt="Delete" />
              Delete
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Hymn;
