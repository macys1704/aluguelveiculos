import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Clientes from './Clientes/index.js';
import Carro from './Carros/index.js'; 
import Locacao from './Locação/index.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
          <Route path = "/" Component={Clientes}></Route> 
          <Route path = "/Carros" Component={Carro}></Route> 
          <Route path = "/Locação" Component={Locacao}></Route> 
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

