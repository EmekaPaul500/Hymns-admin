// AddLyricsOverlay.js
import "./Overlay.css";

export default function AddLyricsOverlay({ onClose, onSelect }) {
  return (
    <div className="overlay-bg">
      <div className="overlay-card">
        <div className="icon-circle"><img src="/Images/information-circle.png" alt="" /></div>

        <p className="overlay-text">Which part are you adding?</p>

        <div className="overlay-buttons">
          <button className="btn-outline" onClick={() => onSelect("chorus")}>
            Chorus
          </button>

          <button className="btn-main" onClick={() => onSelect("stanza")}>
            Stanza
          </button>
        </div>

        <p className="close-btn" onClick={onClose}>Cancel</p>
      </div>
    </div>
  );
}