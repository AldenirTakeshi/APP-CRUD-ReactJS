import React from "react";
import Header from "./Header";

const Main = (props) => {
  return (
    <>
      <Header {...props} />
      <main className="content">Conteúdo</main>
    </>
  );
};

export default Main;
