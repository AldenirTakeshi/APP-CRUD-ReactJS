import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../components/template/Logo";
import Footer from "../components/template/Footer";
import Nav from "../components/template/Nav";
import Home from "../components/Home/Home";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
