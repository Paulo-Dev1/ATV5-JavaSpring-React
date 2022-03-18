import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../../services/DestinoService";

export default function Create() {
  const [cidade, setCidade] = useState("");
  const [pais, setPais] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destino = { cidade, pais};

    if (id) {
        DestinoService.updateDestino(id, destino)
        .then((response) => {
            navigate("/Destinos")
        })

    } else {
        DestinoService.createDestino(destino)
        .then((response) => {
            navigate("/Destinos")
        })
    }
  }

  useEffect(() => {
      function getDestinoById() {
        if (id) {
            DestinoService.getDestinoById(id)
            .then((response) => {
                setCidade(response.data.cidade);
                setPais(response.data.pais);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getDestinoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              id="Cidade"
              className="form-control"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Pais" className="form-label">
              Pais
            </label>
            <input
              type="text"
              id="Pais"
              className="form-control"
              placeholder="Pais"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarDestino(e)}>
            Enviar
          </button>
          <Link
            to="/Destinos"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}