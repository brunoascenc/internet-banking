import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "../App.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-wpp"></div>
      <div className="login-form">
        <form action="">
          <img src={Logo} alt="logo" />
          <h1>
            <span className="bold-txt">Bem vindo</span> ao Internet
            <br /> Banking da Conta Simples
          </h1>
          <p>Preencha os campos abaixo para acessar sua conta</p>

          <div className="signin">
            <input type="email" placeholder="Endereço de e-mail" />
            <input type="password" placeholder="Senha" />
            <Link to="/home">
              <button>Entrar</button>
            </Link>
          </div>

          <a href="/#">Esqueci minha senha</a>

          <div className="signup">
            <p>Não tem uma conta?</p>
            <a href="/#">Abra uma Conta Simples</a>
          </div>
        </form>
      </div>
    </div>
  );
}
