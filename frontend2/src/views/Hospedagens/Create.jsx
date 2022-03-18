import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HospedagemService from "../../services/HospedagemService";

export default function Create() {
  const [tipo_Hospedagem, setTipo_Hospedagem] = useState("");
  const [data_Entrada, setData_Entrada] = useState("");
  const [data_Saida, setData_Saida] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarHospedagem = (e) => {
    e.preventDefault();

    const hospedagem = { tipo_Hospedagem,data_Entrada, data_Saida};

    if (id) {
        HospedagemService.updateHospedagem(id, hospedagem)
        .then((response) => {
            navigate("/Hospedagens")
        })

    } else {
        HospedagemService.createHospedagem(hospedagem)
        .then((response) => {
            navigate("/Hospedagens")
        })
    }
  }

  useEffect(() => {
      function getHospedagemById() {
        if (id) {
            HospedagemService.getHospedagemById(id)
            .then((response) => {
                setTipo_Hospedagem(response.data.tipo_Hospedagem);
                setData_Entrada(response.data.data_Entrada);
                setData_Saida(response.data.data_Saida);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getHospedagemById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Tipo_Hospedagem" className="form-label">
              Tipo de Hospedagem
            </label>
            <input
              type="text"
              id="Tipo_Hospedagem"
              className="form-control"
              placeholder="Tipo de Hospedagem"
              value={tipo_Hospedagem}
              onChange={(e) => setTipo_Hospedagem(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Data_Entrada" className="form-label">
              Data de Entrada
            </label>
            <input
              type="text"
              id="Data_Entrada"
              className="form-control"
              placeholder="Data_Entrada"
              value={data_Entrada}
              onChange={(e) => setData_Entrada(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Data_Saida" className="form-label">
              Data de Saída
            </label>
            <input
              type="text"
              id="Data_Saida"
              className="form-control"
              placeholder="Data_Saida"
              value={data_Saida}
              onChange={(e) => setData_Saida(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarHospedagem(e)}>
            Enviar
          </button>
          <Link
            to="/Hospedagens"
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