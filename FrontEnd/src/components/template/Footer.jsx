import React from "react";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Desenvolvido com{" "}
        <i>
          <FaHeart style={{ color: "red" }} />
        </i>{" "}
        por Cod
        <span style={{ color: "red" }}>3</span>r
      </span>
    </footer>
  );
};

export default Footer;
