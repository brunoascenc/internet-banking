import React from "react";
import Logo from "../images/logo.png";
import "../App.css";
import {
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineBank,
} from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu-container">
      <nav>
        <div className="header">
          <a href="/#">
            <img src={Logo} alt="logo" />
          </a>
          <div className="saldo">
            <h3>Saldo da conta</h3>
            <span>R$: 200,00</span>
          </div>
        </div>
        <ul>
          <Link to="/home">
            <li>
              <AiOutlineHome className="menu-selected" /> <span>Início</span>
            </li>
          </Link>
          <Link to="/depositar">
            <li>
              <FaRegMoneyBillAlt /> <span>Depositar</span>
            </li>
          </Link>
          <Link to="/extrato">
            <li>
              <RiNewspaperLine /> <span>Extrato da conta</span>
            </li>
          </Link>
          <Link to="/cartoes">
            <li>
              <AiOutlineCreditCard /> <span>Cartões</span>
            </li>
          </Link>
          <Link to="/transferencia">
            <li>
              <BiTransfer /> <span>Transferência</span>
            </li>
          </Link>
          <Link to="/pagamentos">
            <li>
              <AiOutlineBank /> <span>Pagamentos</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
