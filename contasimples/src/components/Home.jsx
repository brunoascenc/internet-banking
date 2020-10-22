import React from "react";
import Menu from "./Menu";
import Dados from "./Dados";

export default function Home() {
  return (
    <div className="home-container">
      <Menu />
      <Dados />
    </div>
  );
}
