import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    return (

    <div className="menuimagem">
        
        <div className="topo-site">


        <h1><span className="titulo-Fly">Fly</span>Turismo</h1>
        
        <nav >
       
      <ul class=" menu1">
        <li class=" ">
        <Link to="/">Home</Link>
        </li>
        <li class="">
        <Link to="/Destinos">Destinos</Link>
        </li>
        <li class="">
        <Link to="/Hospedagens">Hospedagem</Link>
        </li>
        <li class="">
        <Link to="/Clientes">Área do Cliente</Link>
        </li>
        <li class="">
        <Link to="/Promocao">Promoções</Link>
        </li>
        <li class="">
        <Link to="/Contato">Contatos</Link>
        </li>
      </ul>
  
    </nav>
        
   

           
        


        </div> 
    </div>
       
    );

    
}

