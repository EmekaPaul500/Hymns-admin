import "./Home.css";

import Hymn from "../../Sub Components/Hymn/Hymn";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-main">
      <header className="home-header">
        <div>
          <figure>
            <img src="./Images/church_logo.png" alt="Church logo" />
          </figure>
          <h1>Admin Page </h1>

          {/* Input Div */}
          <div className="home-input-div ">
            <img
              src="./Images/search-01.png"
              alt=""
              className="home-input-img"
            />
            <input type="text" placeholder="search for hymns" />
          </div>
        </div>
      </header>

      <div className="home-add-hymn-div">
        <Link to="newHymn">
          <div>+</div>
          <p className="p">Add hymn </p>
        </Link>
      </div>

      {/*Hymn Div  */}
      <div className="home-hymn-div">
        <Hymn />
        <Hymn />
        <Hymn />
      </div>
    </main>
  );
};

export default Home;
