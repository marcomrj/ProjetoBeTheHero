import React, {useState} from 'react';
import './styles.css';
import {Link , useHistory } from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi' //Importa do react-icons instalado pelo npm o ícono de login
import api from '../../services/api'
import heroesImg from '../../assets/heroes.png' //Importa a imagem heroes
import logoImg from '../../assets/logo.svg'

export default function Login(){
    
    const [id,setId]= useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', {id})
            
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');
        } catch(err){
            alert('Falha no login, tente novamente.')
        }
    }


    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e=>setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/> {/*Chamada da imagem com texto alternativo */}
        </div>
    );
}



