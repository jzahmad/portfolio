import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function FancyNavbar() {
  return (
    <div style={{ backgroundColor: "#2C3E50", borderBottom: "3px solid #3498db", color: "#ecf0f1", position: "fixed", top: 0, width: "100%", zIndex: 1000, padding: "10px 0", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>
        <a style={{ color: "#ecf0f1", fontSize: "24px", fontWeight: "bold", textDecoration: "none" }} href="#home">My Portfolio</a>
        <div style={{ display: "flex", gap: "10px" }}>
          <a style={{ color: "#3498db", textDecoration: "none" }} href="https://www.linkedin.com/in/jazib-ahmad-19457a230/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={35} />
          </a>
          <a style={{ color: "#3498db", textDecoration: "none" }} href="https://github.com/jzahmad" target="_blank" rel="noopener noreferrer">
            <FaGithub size={35} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FancyNavbar;
