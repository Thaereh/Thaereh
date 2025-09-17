import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <small>&copy; {new Date().getFullYear()} Thaereh. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
