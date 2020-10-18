import React from "react";
import Logo from "../images/logo.png";
import '../App.css'
import { AiOutlineHome, AiOutlineCreditCard, AiOutlineBank } from "react-icons/ai";
import {FaRegMoneyBillAlt} from "react-icons/fa";
import {RiNewspaperLine} from "react-icons/ri";
import {BiTransfer} from "react-icons/bi"

export default function Menu() {
  return (
    <div className="menu-container">
      <nav>
        <div className="header">
            <a href="/#"><img src={Logo} alt="logo"/></a>
            <div className="saldo">
                <h3>Saldo da conta</h3>
                <span>R$: 200,00</span>
            </div>
        </div>
        <ul>
          <li>
          <AiOutlineHome/> <a href="/#">Início</a>
          </li>
          <li>
            <FaRegMoneyBillAlt/> <a href="/#">Depositar</a>
          </li>
          <li>
            <RiNewspaperLine/> <a href="/#">Extrato da conta</a>
          </li>
          <li>
           <AiOutlineCreditCard/> <a href="/#">Cartões</a>
          </li>
          <li>
            <BiTransfer/> <a href="/#">Transferência</a>
          </li>
          <li>
            <AiOutlineBank/> <a href="/#">Pagamentos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
