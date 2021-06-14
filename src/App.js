import './App.css';
import BooksList from "./components/BooksList.js";
import Home from "./components/Home.js";
import {ThemeProvider} from "styled-components";
import {GlobalStyle, ThemeButton} from "./styles.js";
import {useState} from "react";
import BookDetail from "./components/BookDetail.js";
import products from "./products.js";

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

  const [currentTheme, setCurrentTheme] = useState("dark");
  const [book, setBook] = useState(null);  

  const toggleTheme = () => {
    setCurrentTheme(currentTheme==="light"? "dark" : "light")
  }

  const setView = () => {
    return book? <BookDetail book={book}/> : <BooksList setBook={setBook}/>
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{currentTheme==="light"? "Light" : "Dark"} mode</ThemeButton>
      <Home />
      
      {/* <BooksList setBook={setBook}/>
      <BookDetail book={book}/> */}
      {setView()}
    </ThemeProvider>
  );
}

export default App;
