import React,{useEffect,useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import api from '../../services/api'
import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function Profile(){
    const [incidents, setIncidents] = useState([]); //useState inicializado vazio
    const ongName = localStorage.getItem('ongName');    //Recebe o nome da ong vindo do /
    const ongId = localStorage.getItem('ongId');        //Recebe o id da ong vindo do /
    const history = useHistory();
    useEffect(()=>{                         //Já inicializa a função sem necessidade de submit
        api.get('profile',{                 //Recebe do profile a ong id e compara com o authorization
            headers:{
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data)     //Então passa os dados dos casos
        })
    },[ongId])                              //Necessidade para identação

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongId,
                }
            });
        
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch(err){
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout(){
        localStorage.clear();   //Limpa o storage, para novos logins
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident =>(         //Para cada incidentente, esse html ira ser chamado
                                    <li key={incident.id}>  {/*Sendo a chave para eles o id*/}
                                    <strong>CASO:</strong>
                                    <p>{incident.title}</p>
                
                                    <strong>DESCRIÇÃO:</strong>
                                    <p>{incident.description}</p>
                                    
                                    <strong>VALOR:</strong>
                                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                
                                    <button onClick={() => handleDeleteIncident(incident.id)}type="button">
                                        <FiTrash2 size={20} color="#a8a8b3" />
                                    </button>
                                </li>
                ))}
            </ul>
        </div>
    )
}