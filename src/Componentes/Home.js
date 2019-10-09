import React from "react";
import  { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {
    return (
        <div className="home">
            <header></header>
            <div className="button">
                <Link to="/cadastro">
                    <button>Cadastrar</button>
                </Link>
            </div>
        </div>
        
    );
}

export default Home;