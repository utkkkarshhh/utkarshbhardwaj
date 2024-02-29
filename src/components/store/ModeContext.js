import React, { useState } from "react";

const ModeContext = React.createContext({
  darkMode: false,
  onToggle: () => {},
});

export const ModeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  return (
    <ModeContext.Provider
      value={{ onToggle: darkModeHandler, darkMode: darkMode }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
