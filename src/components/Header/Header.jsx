import { NavLink } from "react-router-dom";
import "./Header.scss";
import FillExampleButton from "../FillExampleButton/FillExampleButton";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <a href="">CV Generator</a>
      </h1>
      <nav className="header__navigation">
        <ul className="header__navigation-menu">
          <li className="header__navigation-item">
            <NavLink to="/">Edit CV</NavLink>
          </li>
          <li className="header__navigation-item">
            <NavLink to="/preview">Preview CV</NavLink>
          </li>
          <li className="header__navigation-item">
            <FillExampleButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
