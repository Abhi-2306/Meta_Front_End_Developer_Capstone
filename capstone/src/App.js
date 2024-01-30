import React from "react";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import Menu from "./Menu";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </Router>
  );
}

export default App;
