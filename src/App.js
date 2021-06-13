import './App.css';
import BooksList from "./components/BooksList.js"
import Home from "./components/Home.js"
import {ThemeProvider} from "styled-components"
import {GlobalStyle, ThemeButton} from "./styles.js"
import {useState} from "react"

function App() {

  const theme = {
    light:{
      mainColor: "#03045e",
      backgroundColor: "#f0efeb",
    },

    dark: {
      mainColor: "#f0efeb",
      backgroundColor: "#03045e",
    },
  };

  //To change the theme of the website
  const [currentTheme, setCurrentTheme] = useState("light");
  
  //To change the text inside the button to the opposite theme!
  const [otherTheme, setOtherTheme] = useState("dark");

  const toggleTheme = () => {
    setOtherTheme(currentTheme==="light"? "light" : "dark")
    setCurrentTheme(currentTheme==="light"? "dark" : "light")
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{otherTheme} mode</ThemeButton>
      <Home />
      <BooksList />

    </ThemeProvider>
  );
}

export default App;
