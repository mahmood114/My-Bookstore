import './App.css';
import BooksList from "./components/BooksList.js"
import Home from "./components/Home.js"
import {ThemeProvider} from "styled-components"
import {GlobalStyle, ThemeButton} from "./styles.js"
import {useState} from "react"

function App() {

  const theme = {
    light:{
      mainColor: "#15202b",
      backgroundColor: "#ffffff",
    },

    dark: {
      mainColor: "#ffffff",
      backgroundColor: "#15202b",
    },
  };

  //To change the theme of the website
  const [currentTheme, setCurrentTheme] = useState("dark");
  
  //To change the text inside the button to the opposite theme!

  const toggleTheme = () => {
    setCurrentTheme(currentTheme==="light"? "dark" : "light")
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{currentTheme==="light"? "Light" : "Dark"} mode</ThemeButton>
      <Home />
      <BooksList />

    </ThemeProvider>
  );
}

export default App;
