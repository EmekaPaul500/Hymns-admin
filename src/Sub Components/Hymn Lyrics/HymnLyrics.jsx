import "./HymnLyrics.css";

const HymnLyrics = ({ index }) => {
  return (
    <div className="hymn_lyrics_div">
      <div>{index}</div>
      <input type="text" placeholder="Enter hymn lyrics" />
    </div>
  );
};

export default HymnLyrics;
