import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ModeButton from "../UI/Buttons/ModeButton";
import ModeContext from "../store/ModeContext";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const { onToggle, darkMode } = useContext(ModeContext);

  const clickHandler = (event) => {
    setSelectedItem(event.target.innerHTML);
  };

  useEffect(() => {
    function handleScroll() {
      const navbar = document.getElementById("navbar");
      const menuContainer = document.getElementById("menu-container");
      if (
        document.documentElement.scrollTop > 0 ||
        document.body.scrollTop > 0
      ) {
        navbar.classList.remove("navbar");
        navbar.classList.add("navbar-scrolled");
        menuContainer.classList.remove("menu-container");
        menuContainer.classList.add("menu-container-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
        navbar.classList.add("navbar");
        menuContainer.classList.add("menu-container");
        menuContainer.classList.remove("menu-container-scrolled");
      }
    }

    window.addEventListener("load", () => {
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });
  }, []);

  return (
    <nav id="navbar" className="navbar">
      <div id="menu-container" className="menu-container">
        <ul className="menu-items">
          <li className="menu-item">
            <FontAwesomeIcon className="search" icon={faSearch} />
          </li>
          <li
            onClick={clickHandler}
            className={
              selectedItem === "Home" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={clickHandler}
            className={
              selectedItem === "Portfolio" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li
            onClick={clickHandler}
            className={
              selectedItem === "Contact" ? "menu-item active" : "menu-item"
            }
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li className="menu-item" onClick={onToggle}>
            <ModeButton darkMode={darkMode} modeHandler={onToggle} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
