import './App.css';
import BooksList from "./components/BooksList.js";
import Home from "./components/Home.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton, NavProduct, Logo } from "./styles.js";
import { useState } from "react";
import BookDetail from "./components/BookDetail.js";
import { Route, Switch } from 'react-router';
import logo from "./Bookstore-Logo.png";

const theme = {
  light: {
    mainColor: "#15202b",
    backgroundColor: "#ffffff",
    red: "red",
    itemBGColor : "#f1f1f1",
  },

  dark: {
    mainColor: "#ffffff",
    backgroundColor: "#15202b",
    red: "red",
    itemBGColor : "#2e465e",
  },
};

function App() {

  // States
  const [currentTheme, setCurrentTheme] = useState("dark");

  //Theme handler
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Logo to="/"><img src={logo} alt="Logo" /></Logo>
      <ThemeButton onClick={toggleTheme}>{currentTheme === "light" ? "Light" : "Dark"} mode</ThemeButton>
      <NavProduct to="/products">Products</NavProduct>
      <Switch>
        <Route path="/products/:productSlug">
          <BookDetail />
        </Route>
        <Route path="/products">
          <BooksList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
