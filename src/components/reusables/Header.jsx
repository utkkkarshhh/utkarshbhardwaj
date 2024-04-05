import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModeButton from "../UI/Buttons/ModeButton";
import ModeContext from "../store/ModeContext";
import Logo from "../../img/utkarsh-img.png";
import { PiHamburgerBold } from "react-icons/pi";
import { GiCancel } from "react-icons/gi";

const Header = () => {
  const { darkMode, onToggle } = useContext(ModeContext);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (itemName) => {
    setSelectedItem(itemName);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="headerLeft">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="headerCenter">
        <Link
          to="/"
          className={`headerLink ${selectedItem === "Home" ? "active" : ""} ${
            darkMode ? "dark-mode" : "light-mode"
          }`}
          onClick={() => handleClick("Home")}
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className={`headerLink ${
            selectedItem === "Portfolio" ? "active" : ""
          } ${darkMode ? "dark-mode" : "light-mode"}`}
          onClick={() => handleClick("Portfolio")}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`headerLink ${
            selectedItem === "Contact" ? "active" : ""
          } ${darkMode ? "dark-mode" : "light-mode"}`}
          onClick={() => handleClick("Contact")}
        >
          Contact
        </Link>
      </div>

      <div className="headerRight">
        {!showMenu && (
          <span onClick={onToggle}>
            <ModeButton darkMode={darkMode} modeHandler={onToggle} />
          </span>
        )}

        <div className="hamburgerMenu" onClick={toggleMenu}>
          {!showMenu ? (
            <p className="hamburgerMenuIcon">
              <PiHamburgerBold />
            </p>
          ) : (
            <span className="cancelButton" onClick={toggleMenu}>
              <GiCancel />
            </span>
          )}
        </div>

        {showMenu && (
          <div className="hamburgerMenuItem">
            {/* Place your menu items here */}
            <Link to="/" onClick={() => handleClick("Home")}>
              Home
            </Link>
            <Link to="/portfolio" onClick={() => handleClick("Portfolio")}>
              Portfolio
            </Link>
            <Link to="/contact" onClick={() => handleClick("Contact")}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
