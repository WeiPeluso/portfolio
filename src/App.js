import React from "react";
import Header from "./components/ui/Header";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";

import main from "./assets/main.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <img alt="web developer" src={main} />
    </ThemeProvider>
  );
}

export default App;
