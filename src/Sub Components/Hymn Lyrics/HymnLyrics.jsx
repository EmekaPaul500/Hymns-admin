import "./HymnLyrics.css";

const HymnLyrics = ({ index, type, onChangeText }) => {
  const handleChange = (e) => {
    onChangeText(e.target.value);   // send text to parent
  };

  return (
    <div className="hymn_lyrics_div">
      <div>
        {type === "stanza" ? `${index}.` : "Chorus"}
      </div>

      <input
        type="text"
        placeholder="Enter hymn lyrics"
        onChange={handleChange}
      />
    </div>
  );
};

export default HymnLyrics;
