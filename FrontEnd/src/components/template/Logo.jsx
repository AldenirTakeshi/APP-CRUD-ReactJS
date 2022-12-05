import React from "react";
import Logo from "../../assets/imgs/Starbucks-logo.png";
import "./Logo.css";

const logo = () => {
  return (
    <aside className="logo">
      <a href="/" className="logo">
        <img src={Logo} style={{ maxWidth: "120px" }} alt="StarBucks-logo" />
      </a>
    </aside>
  );
};

export default logo;
