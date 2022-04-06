import React from "react";


export default function Contato() {
    return (
 
  <div className="container contatocor mb-3 p-5">    
    
<h3>Entre em Contato</h3>
<br/>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputNome4" class="form-label">Nome</label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">E-mail✉</label>
    <input type="email" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Endereço</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Rua A"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Complemento</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Proximo ao Supermercado"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Cidade</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Estado</label>
    <select id="inputState" class="form-select">
      <option selected>Estado</option>
      <option>RJ</option>
      <option>SP</option>
      <option>MG</option>
      <option>BH</option>
      <option>RS</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">CEP</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>

  <div class="m-3 col md-2">
  <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Lembre-me
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>


    <hr/>
    
    <p className="contato1">Qualquer dúvida você pode entrar em contato através!</p>
    <p>✉<span className=""> flyturismo@flyturismo.com.br</span></p>
    <p>✆<span>(21) 9999-99999</span></p>

    <p className="contato1">Redes Sociais</p>
    <img src="/img/facebook.png" alt="" />
    <img src="/img/instagram.png" alt="" />
    <img src="/img/twitter.png" alt="" />
    <img src="/img/linkedin.png" alt="" />
    <img src="/img/youtube.png" alt="" />
    
      </div>
    );
}