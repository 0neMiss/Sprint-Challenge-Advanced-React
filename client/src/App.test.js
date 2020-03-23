import React from 'react';
import ReactDOM from 'react-dom';
import App, {darkToggle} from './App';
import { render, fireEvent} from "@testing-library/react";


test("renders without crashing", () => {
  render(<App />);
});

test("checks inner html of dark mode button", () =>{
  const container = render(<App />);
  const darkModeButton = container.getByText(/dark mode/i);


  expect(darkModeButton.innerHTML).toBe("dark mode");
})
