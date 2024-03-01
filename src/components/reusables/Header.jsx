import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModeButton from "../UI/Buttons/ModeButton";
import ModeContext from "../store/ModeContext";
import Logo from "../../img/utkarsh-img.png";
import styles from "./Header.module.css";

const Header = () => {
  const { darkMode, onToggle } = useContext(ModeContext);
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <header
      className={`${styles.header} ${
        darkMode ? styles["dark-mode"] : styles["light-mode"]
      }`}
    >
      <div className={styles.headerLeft}>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </div>
      <div className={styles.headerCenter}>
        <Link
          to="/"
          className={`${styles.headerLink} ${
            selectedItem === "Home"
              ? !darkMode
                ? styles.activeNight
                : styles.activeDay
              : ""
          }`}
          onClick={() => handleClick("Home")}
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className={`${styles.headerLink} ${
            selectedItem === "Portfolio"
              ? !darkMode
                ? styles.activeNight
                : styles.activeDay
              : ""
          }`}
          onClick={() => handleClick("Portfolio")}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`${styles.headerLink} ${
            selectedItem === "Contact"
              ? !darkMode
                ? styles.activeNight
                : styles.activeDay
              : ""
          }`}
          onClick={() => handleClick("Contact")}
        >
          Contact
        </Link>
      </div>
      <div className={styles.headerRight}>
        <span onClick={onToggle}>
          <ModeButton darkMode={darkMode} modeHandler={onToggle} />
        </span>
      </div>
    </header>
  );
};

export default Header;
