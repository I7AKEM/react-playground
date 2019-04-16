import * as React from "react";
import logo from "../../assets/img/logo.png";
import Nav from '../Nav';
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <div className="logo-with-text">
          <a>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="text">
              <span>
                Land<strong>Valuation</strong>
              </span>
            </div>
          </a>
        </div>
        <Nav/>
      </header>
    </div>
  );
}
