import './App.css';
import BooksList from "./components/BooksList.js";
import Home from "./components/Home.js";
import {ThemeProvider} from "styled-components";
import {GlobalStyle, ThemeButton} from "./styles.js";
import {useState} from "react";
import BookDetail from "./components/BookDetail.js";
import products from './products.js';

const theme = {
  light:{
    mainColor: "#15202b",
    backgroundColor: "#ffffff",
    red: "red",
  },

  dark: {
    mainColor: "#ffffff",
    backgroundColor: "#15202b",
    red: "red",
  },
};

function App() {

// States
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [book, setBook] = useState(null);
  const [_books, setBooks] = useState(products);

  //Theme handler
  const toggleTheme = () => {
    setCurrentTheme(currentTheme==="light"? "dark" : "light")
  }

// List/Detail view handler
  const setView = () => {
    return book? <BookDetail book={book} setBook={setBook} deleteBook={deleteBook}/> : <BooksList setBook={setBook} books={_books} deleteBook={deleteBook}/>
  }

  const deleteBook = (bookID) => {
    const filtered = _books.filter(book => book.id !== bookID);
    setBooks(filtered);
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{currentTheme==="light"? "Light" : "Dark"} mode</ThemeButton>
      <Home />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
