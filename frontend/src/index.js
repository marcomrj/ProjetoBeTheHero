import React from 'react';      //Importa o react para a página
import ReactDOM from 'react-dom';      //Inegração do react com o navegador
import App from './App';        //Importa a página App

ReactDOM.render(        //Função que renderiza em tela o conteúdo nela chamado , componentes do react são chamados como no html, e possuem a 1 letra maiúscula
  <React.StrictMode>
    <App />             
  </React.StrictMode>,
  document.getElementById('root') //Renderiza dentro da div om o id 'root'
);

