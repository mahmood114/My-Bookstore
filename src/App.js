import './App.css';
import BooksList from "./components/BooksList.js"
import Home from "./components/Home.js"
import {ThemeProvider} from "styled-components"
import {GlobalStyle} from "./styles.js"

function App() {

  const theme = {
    mainColor: "cyan",
    backgroundColor: "magenta",
    cardColor: "red",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <BooksList />

    </ThemeProvider>
  );
}

export default App;
