import React,{ useState } from 'react';
import{Link, useHistory } from 'react-router-dom';
import{ FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){ //Recebe a partir do useState os valores por meio dos inputs, sendo necessário alterar os inputs e colocar values parece serem alocados valores.
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsApp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');
    
    const history = useHistory();
    async function handleRegister(e){ 
        e.preventDefault();      //Previne inputs vazios

        
        const data ={        //Recebe os valores pelo useState na array
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try{
            const response = await api.post('ongs',data); //Envia os valores para a / em formato JSON
            alert(`Seu ID de acesso ${response.data.id}`);  //Mensagem de ẽxito
            history.push('/');          //Leva para a rota /
        } catch (err){
            alert('Erro no cadastro, tente novamente.');     //Mensagem de falha
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Já possui cadastro ?
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsApp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        /> 
                        <input 
                            placeholder="UF" style={{width:80}}
                            value={uf}
                            onChange={e=> setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
};