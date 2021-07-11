import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton, NavProduct, Logo } from "./styles.js";
import { useState } from "react";
import logo from "./Bookstore-Logo.png";
import Routes from "./components/Routes";
import { observer } from "mobx-react";
import vendorStore from "./stores/vendorStore";
import productStore from "./stores/productStore";
import SignupButton from "./components/buttons/Signup";

const theme = {
  light: {
    mainColor: "#15202b",
    backgroundColor: "#ffffff",
    red: "red",
    itemBGColor: "#f1f1f1",
  },

  dark: {
    mainColor: "#ffffff",
    backgroundColor: "#15202b",
    red: "red",
    itemBGColor: "#2e465e",
  },
};

function App() {
  // States
  const [currentTheme, setCurrentTheme] = useState("dark");

  //Theme handler
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Logo to="/">
        <img src={logo} alt="Logo" />
      </Logo>
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Light" : "Dark"} mode
      </ThemeButton>
      <NavProduct to="/products">Products</NavProduct>
      <NavProduct to="/vendors">Vendors</NavProduct>
      <SignupButton />
      {vendorStore.loading || productStore.loading ? (
        <h1>Loading</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
