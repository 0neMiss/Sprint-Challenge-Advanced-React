import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
const DarkModeButton = () => {
  //custom hook statement with the result being set equal to the result of useDarkMode evaluating on true or false.
  const [darkMode, setDarkMode] = useDarkMode(false);
  //declaring function to toggle between true and false for darkMode
  const darkToggle = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  // passing toggleMode into the onclick to trigger the change from true to false
  return (
    <nav className="button-container">
        <button
          className = "toggle-button"
          onClick={darkToggle}
        >
        dark mode
        </button>
    </nav>
  );
};

export default DarkModeButton;
