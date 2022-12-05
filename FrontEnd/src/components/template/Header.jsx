import React from "react";
import "./Header.css";
import { FaHome } from "react-icons/fa";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
          <i>
            <FaHome />
          </i>
          {title}
          <p className="lead text-muted">{subtitle}</p>
        </h1>
      </header>
    </>
  );
};

export default Header;
