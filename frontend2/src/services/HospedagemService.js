import axios from "axios";
const HOSPEDAGEM_API_URL = "http://localhost:8080/hospedagens";

class HospedagemService {
  getAllHospedagens() {
    return axios.get(HOSPEDAGEM_API_URL);
  }

  createHospedagem(hospedagem) {
    return axios.post(HOSPEDAGEM_API_URL, hospedagem);
  }

  getHospedagemById(hospedagemId) {
    return axios.get(HOSPEDAGEM_API_URL + "/" + hospedagemId);
  }

  updateHospedagem(hospedagemId, hospedagem) {
    return axios.put(HOSPEDAGEM_API_URL + "/" + hospedagemId, hospedagem);
  }

  deleteHospedagem(hospedagemId) {
    return axios.delete(HOSPEDAGEM_API_URL + "/" + hospedagemId);
  }
}

export default new HospedagemService();