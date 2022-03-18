import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./views/Home";

import Destino from"./views/Destinos/Index";
import DestinoCreate from "./views/Destinos/Create";

import Hospedagem from "./views/Hospedagens/Index";
import HospedagemCreate from "./views/Hospedagens/Create"

import Cliente from "./views/Clientes/Index";
import ClienteCreate from "./views/Clientes/Create"

import Promocao from "./views/Promocao";
import Contato from "./views/Contato";

import "./assets/style/Estilo.css"

function App() {
  return (
      <BrowserRouter >
      <Menu/>
      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/Destinos" element={<Destino/>} />
        <Route path="/Destinos-Create" element={<DestinoCreate />} />
        <Route path="/Destinos-Update/:id" element={<DestinoCreate />} />

        <Route path="/Hospedagens" element={<Hospedagem/>} />
        <Route path="/Hospedagens-Create" element={<HospedagemCreate />} />
        <Route path="/Hospedagens-Update/:id" element={<HospedagemCreate />} />

        <Route path="/Clientes" element={<Cliente/>} />
        <Route path="/Clientes-Create" element={<ClienteCreate />} />
        <Route path="/Clientes-Update/:id" element={<ClienteCreate />} />


        <Route path="/Promocao" element={<Promocao/>} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
