import React from "react";
import { AiOutlineHome, AiOutlineCreditCard } from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "../../App.css";

export default function MenuLinks() {
  return (
    <>
      <ul>
        <NavLink
          to="/home"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          <li>
            <AiOutlineHome /> <span>Início</span>
          </li>
        </NavLink>
        <NavLink
          to="/extrato"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          <li>
            <RiNewspaperLine /> <span>Extrato da conta</span>
          </li>
        </NavLink>
        <NavLink
          to="/cartoes"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          <li>
            <AiOutlineCreditCard /> <span>Cartões</span>
          </li>
        </NavLink>
      </ul>
    </>
  );
}
