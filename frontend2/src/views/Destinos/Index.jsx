import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinoService from "../../services/DestinoService";

export default function Index() {
  const [destinos, setDestinos] = useState([]);

  const getAllDestinos = () => {
    DestinoService.getAllDestinos()
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDestinos();
  }, []);

  const deleteDestino = (destinoId) => {
    DestinoService.deleteDestino(destinoId)
      .then((response) => {
        getAllDestinos();
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
        <h1 className="container">Informar Destino</h1>
      </header>
      <div className="container p-5">
        <Link to="/Destinos-Create" className="btn btn-primary mb-2">
          Criar Destino
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Cidade</th>
                <th>País</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {destinos.map((destino) => (
                <tr key={destino.id_Destino}>
                  <td>{destino.id_Destino}</td>
                  <td>{destino.cidade}</td>
                  <td>{destino.pais}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Destinos-Update/${destino.id_Destino}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteDestino(destino.id_Destino)}
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