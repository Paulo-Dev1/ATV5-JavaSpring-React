import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../../services/DestinoService";
import HospedagemService from "../../services/HospedagemService";
import ClienteService from "../../services/ClienteService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");//qualquer coisa mudar para numero
  const [cpf, setCpf] = useState("");//mudar qualquer coisa numero
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const [destino, setDestino] = useState({ id_Destino: "", cidade: ""});
  const [hospedagem, setHospedagem] = useState({ id_Hospedagem: "", tipo_Hospedagem: "" });

  const [destinos, setDestinos] = useState([]);
  const [hospedagens, setHospedagens] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

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

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const cliente = { nome, idade, cpf, telefone, endereco,destino,hospedagem };
    console.log(cliente)
    if (id) {
      ClienteService.updateCliente(id, cliente).then((response) => {
        navigate("/Clientes");
      });
    } else {
        ClienteService.createCliente(cliente).then((response) => {
        navigate("/Clientes");
      });
    }
  };

  useEffect(() => {
    function getClienteById() {
      if (id) {
        ClienteService.getClienteById(id)
          .then((response) => {
            setNome(response.data.nome);
            setIdade(response.data.idade);
            setCpf(response.data.cPF);
            setTelefone(response.data.telefone);
            setEndereco(response.data.endereco);

            setDestino({
              id_Destino: response.data.destino.id_Destino,
              cidade: response.data.destino.cidade,
            });

            setHospedagem({
              id_Hospedagem: response.data.hospedagem.id_Hospedagem,
              tipo_Hospedagem: response.data.destino.tipo_Hospedagem,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getClienteById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Idade" className="form-label">
              Idade
            </label>
            <input
              type="text"
              id="Idade"
              className="form-control"
              placeholder="Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              id="Cpf"
              className="form-control"
              placeholder="Cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Telefone" className="form-label">
            Telefone
            </label>
            <input
              type="text"
              id="Telefone"
              className="form-control"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Endereco" className="form-label">
            Endereço
            </label>
            <input
              type="text"
              id="Endereco"
              className="form-control"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="DestinoId_destino" className="form-label">
              Destino
            </label>
            <select
              id="DestinoId_destino"
              name="DestinoId_destino"
              className="form-select"
              onChange={(e) =>
                setDestino({ id_Destino: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? destino.cidade : 'Escolha um Destino'}</option>
              {destinos.map((destino) => (
                <option key={destino.id_Destino} value={destino.id_Destino}>
                  {destino.cidade} {destino.pais}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="HospedagemId_hospedagem" className="form-label">
            Hospedagem
            </label>
            <select
              id="HospedagemId_hospedagem"
              name="HospedagemId_hospedagem"
              className="form-select"
              onChange={(e) =>
                setHospedagem({ id_Hospedagem: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? hospedagem.tipo_Hospedagem : 'Escolha uma hospedagem'}</option>
              {hospedagens.map((hospedagem) => (
                <option key={hospedagem.id_Hospedagem} value={hospedagem.id_Hospedagem}>
                  {hospedagem.tipo_Hospedagem} {hospedagem.data_Entrada} {hospedagem.data_Saida}
                  
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarCliente(e)}
          >
            Enviar
          </button>
          <Link
            to="/Clientes"
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