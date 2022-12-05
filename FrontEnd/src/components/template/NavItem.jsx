import React from "react";
import { FaHome } from "react-icons/fa";
const NavItem = ({ text }) => {
  return (
    <a href="#/">
      <FaHome />
      {text}
    </a>
  );
};

export default NavItem;
