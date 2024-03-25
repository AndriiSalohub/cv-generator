import { NavLink } from "react-router-dom";
import "./Header.scss";

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
            <button className="header__upload-btn">Fill Example CV</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
