import { useState, useEffect } from "react";


//declaring function useDarkMode passing the initial value from NavBar

const useDarkMode = (initialValue) => {

  //declaring a custom hook statement with the initial state set to the result of useLocalStorage passing both a key and initialvalue as arguements

  //in this case it will be passing a true, or a false into initail value

  const [darkMode, setDarkMode] = useState(initialValue);

//declaring useEffect with if else logic selecting the body element and adding a classname or removing dpeending on if darkMode is true or false

//the if statement implicitly knows that we are saying if the variable is true, else remove the class.

  useEffect(() =>{
      if(darkMode){
        document.querySelector("body").classList.add("dark-mode");
      }
      else{
        document.querySelector("body").classList.remove("dark-mode");
      }
  },
//monitoring so that this effect only happens when a change happens to the darkmode variable.
  [darkMode]);

  //returning the darkMode variable, as well as its setter function
  return [darkMode, setDarkMode];
};
export default useDarkMode;
