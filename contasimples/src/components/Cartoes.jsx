import React from 'react'
import Menu from './Menu'
import '../App.css'

export default function Cartoes() {
    return (
        <div className="home-container">
            <Menu/>
            <div className="cartoes-empresa">
            <h1>Cartoes da Empresa</h1>
                <div className="header">
                    <span>Cartão</span>
                    <span>Final</span>
                </div>
                <div className="cartoes">
                    <h4>Nome do cartão</h4>
                    <span>**** 1234</span>
                </div>
                <div className="cartoes">
                    <h4>Nome do cartão</h4>
                    <span>**** 1234</span>
                </div>
                <div className="cartoes">
                    <h4>Nome do cartão</h4>
                    <span>**** 1234</span>
                </div>
            </div>       
        </div>
    )
}
