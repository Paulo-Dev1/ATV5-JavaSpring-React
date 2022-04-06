import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HospedagemService from "../../services/HospedagemService";

export default function Index() {
  const [hospedagens, setHospedagens] = useState([]);

  const getAllHospedagens = () => {
    HospedagemService.getAllHospedagens()
      .then((response) => {
        setHospedagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllHospedagens();
  }, []);

  const deleteHospedagem = (hospedagemId) => {
    HospedagemService.deleteHospedagem(hospedagemId)
      .then((response) => {
        getAllHospedagens();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Hospedagem</h1>
      </header>
      <div className="container p-5">
        <Link to="/Hospedagens-Create" className="btn btn-primary mb-2">
          Criar Hospedagem
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm table-warning">
            <thead>
              <tr>
               
                <th>Tipo de Hospedagem</th>
                <th>Data de Entrada</th>
                <th>Data de Saída</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {hospedagens.map((hospedagem) => (
                <tr key={hospedagem.id_Hospedagem}>
                  
                  <td>{hospedagem.tipo_Hospedagem}</td>
                  <td>{hospedagem.data_Entrada}</td>
                  <td>{hospedagem.data_Saida}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Hospedagens-Update/${hospedagem.id_Hospedagem}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHospedagem(hospedagem.id_Hospedagem)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
