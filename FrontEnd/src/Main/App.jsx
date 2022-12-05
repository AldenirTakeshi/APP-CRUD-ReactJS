import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../components/template/Logo";
import Footer from "../components/template/Footer";
import Main from "../components/template/Main";
import Nav from "../components/template/Nav";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Main title="Inicío" subtitle="Segundo projeto com React" />
      <Footer />
    </div>
  );
};

export default App;
