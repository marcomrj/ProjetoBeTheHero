import React from 'react';
import './styles.css';
import { FiLogIn} from 'react-icons/fi' //Importa do react-icons instalado pelo npm o ícono de login

import heroesImg from '../../assets/heroes.png' //Importa a imagem heroes
import logoImg from '../../assets/logo.svg'

export default function Login(){
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/> {/*Chamada da imagem com texto alternativo */}
        </div>
    );
}



