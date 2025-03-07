import "./Hymn.css";
import { Form } from "react-router-dom";

const Hymn = () => {
  return (
    <section className="hymn-sec">
      <figure className="hymn-music-note">
        <img src="./Images/music-note-01.png" alt="Music note" />
      </figure>

      <div className="hymn-div">
        <h4>1. Amazing grace</h4>
        <p>
          Amazing grace! how sweet the sound, That saved a wretch; like me! I
          once was lost, but now am found
        </p>

        {/* Button Div */}
        <div className="hymn-btn-div">
          <Form>
            <button>
              <img src="./Images/edit.png" alt="Edit" />
              Edit
            </button>
          </Form>
          <Form>
            <button>
              <img src="./Images/delete.png" alt="Delete" />
              Delete
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Hymn;
