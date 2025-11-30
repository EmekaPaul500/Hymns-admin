import "./Home.css";

import { useContext } from "react";
import { HymnContext } from "../../Hymncontext";
import Hymn from "../../Sub Components/Hymn/Hymn";
import { Link } from "react-router-dom";

const Home = () => {
  const { hymns } = useContext(HymnContext);

 
  console.log("Hymns from context:", hymns);

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
        {(!hymns || hymns.length === 0) ? (
          <p>No hymns added yet.</p>
        ) : (
          hymns.map((h, index) => (
            <Hymn
              key={index}
              index={index + 1}             
              title={h.title}
              lyrics={h.lyrics || []}       
              author={h.composer}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
