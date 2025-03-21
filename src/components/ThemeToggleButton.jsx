import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../CSS/ThemeToggleButton.css";

const ThemeToggleButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggleButton;
