import React from "react";
import "./Nav.css";
import { FaHome, FaUsers } from "react-icons/fa";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        {/* <NavItem text="Início" /> */}
        <a href="#/users">
          <FaHome /> Inicío
        </a>
        {"  "}
        <a href="#/users">
          <FaUsers /> Usários
        </a>
      </nav>
    </aside>
  );
};

export default Nav;
