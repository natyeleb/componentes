import React, {useState} from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const abrirMenu = () => {
        setMenuAtivo(!menuAtivo);
    };
    const FecharMenu = () => {
        setMenuAtivo(false)
    }

    return (
        <div className="NavBar">
            <nav>
                <div className="ancora">
                    <Link  to="/">Home</Link>
                    <Link  to="/pagamento">Pagamentos</Link>
                    <Link  to="/carrinho">Carrinho</Link>
                    <Link  to="/produto">Produtos</Link>
                </div>
                <div onClick={abrirMenu} className="menu-hamburger">
                    <span className={`${menuAtivo ? "variarX1": ""}`} ></span>
                    <span className={`${menuAtivo ? "sumirIgualTiro": ""}`}></span>
                    <span className={`${menuAtivo ? "variarX2": ""}`}></span>
                </div>
            </nav>
            <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
                <Link onClick={FecharMenu} to="/">Home </Link>
                <Link onClick={FecharMenu} to="/">Pagamentos </Link>
                <Link onClick={FecharMenu} to="/">Carrinho </Link>
                <Link onClick={FecharMenu} to="/">Produtos </Link>

            
            </section>
                
        </div>

    );
};
export default NavBar;