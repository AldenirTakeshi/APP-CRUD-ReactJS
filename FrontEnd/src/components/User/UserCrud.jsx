import React, { components } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  suvtitle: "Cadastro de usuários: Incluir, Listar, Alterar, Excluir",
};

export default class UserCrud extends Componets {
  render() {
    return <Main {...headerProps}>Cadastro de Usuários</Main>;
  }
}
