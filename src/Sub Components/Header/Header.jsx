import "./Header.css";
import { Form } from "react-router-dom";

const Header = ({ link }) => {
  return (
    <header className="header">
      <div className="header_container">
        <Form action={link}>
          <button className="header_back_button">
            <img src="./Images/arrow.png" alt="Back" />
          </button>
        </Form>
        <div>
          <figure>
            <img src="./Images/church_logo.png" alt="Church logo" />
          </figure>
          <h1>New Hymn</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
