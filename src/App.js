import './App.css';
import BooksList from "./components/BooksList.js";
import Home from "./components/Home.js";
import {ThemeProvider} from "styled-components";
import {GlobalStyle, ThemeButton, NavProduct, Logo} from "./styles.js";
import {useState} from "react";
import BookDetail from "./components/BookDetail.js";
import books from './books.js';
import { Route, Switch } from 'react-router';
import logo from "./Bookstore-Logo.png";

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
  // const [book, setBook] = useState(null);
  const [_books, setBooks] = useState(books);

  //Theme handler
  const toggleTheme = () => {
    setCurrentTheme(currentTheme==="light"? "dark" : "light")
  }

  const deleteBook = (bookID) => {
    const filtered = _books.filter(book => book.id !== bookID);
    setBooks(filtered);
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Logo to="/">
        <img src={logo}/>
      </Logo>
      <ThemeButton onClick={toggleTheme}>{currentTheme==="light"? "Light" : "Dark"} mode</ThemeButton>
      <NavProduct to="/products">Products</NavProduct>
      <Switch>
        <Route path="/products/:productSlug">
          <BookDetail books={_books} deleteBook={deleteBook}/>
        </Route>
        <Route path="/products">
          <BooksList books={_books} deleteBook={deleteBook}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
