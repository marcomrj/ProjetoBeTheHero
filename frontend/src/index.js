import React from 'react';      //Importa o react para a página
import ReactDOM from 'react-dom';      //Importa chamada de renderização
import App from './App';        //Importa a página App


ReactDOM.render(        //Função que renderiza em tela o conteúdo nela chamado
  <React.StrictMode>
    <App />             
  </React.StrictMode>,
  document.getElementById('root')
);

