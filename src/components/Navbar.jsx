import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [currentMode, setCurrentMode] = useState(true);
  const clickHandler = (e) => {
    setSelectedItem(e.target.innerHTML);
  };

  const modeHandler = () => {
    setCurrentMode(!currentMode);
    const body = document.querySelector("body");
    if (currentMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
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
            Home
          </li>
          <li
            onClick={clickHandler}
            className={
              selectedItem === "Contact" ? "menu-item active" : "menu-item"
            }
          >
            Contact
          </li>
          <li
            onClick={clickHandler}
            className={
              selectedItem === "Blogs" ? "menu-item active" : "menu-item"
            }
          >
            Blogs
          </li>
          <li
            onClick={clickHandler}
            className={
              selectedItem === "Subscribe" ? "menu-item active" : "menu-item"
            }
          >
            Subscribe
          </li>
          <li className="menu-item" onClick={modeHandler}>
            {currentMode ? (
              <FontAwesomeIcon className="moon" icon={faMoon} />
            ) : (
              <FontAwesomeIcon className="sun" icon={faSun} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
