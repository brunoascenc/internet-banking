import React, { useState } from "react";
import Logo from "../images/logo.png";
import "../App.css";
import MenuLinks from "./side-menu/MenuLinks";
import SaldoEmpresa from "./side-menu/SaldoEmpresa";
import { VscMenu, VscClose } from "react-icons/vsc";

export default function Menu() {
  //Mobile menu toggle
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="mobile-menu">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <VscClose /> : <VscMenu />}
        </div>
      </div>
      <div className={click ? "menu-container toggle" : "menu-container"}>
        <nav className="navbar">
          <div className="header">
            <a href="/#">
              <img src={Logo} alt="logo" />
            </a>
            <SaldoEmpresa />
          </div>
          <ul>
            <MenuLinks />
          </ul>
          <footer>
            <span>Conta Simples &copy; 2020</span>
          </footer>
        </nav>
      </div>
    </>
  );
}
