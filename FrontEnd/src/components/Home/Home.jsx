import React from "react";
import Main from "../template/Main";

const Home = () => {
  return (
    <Main title="Inicío" subtitle="Segundo projeto com React">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a contrução de um sistema de cadastro
        desenvolvido em React!
      </p>
    </Main>
  );
};

export default Home;
