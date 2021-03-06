package com.agencia.turismo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agencia.turismo.entites.Cliente;
import com.agencia.turismo.entites.Destino;
import com.agencia.turismo.entites.Hospedagem;
import com.agencia.turismo.repositorys.ClienteRepository;
import com.agencia.turismo.repositorys.DestinoRepository;
import com.agencia.turismo.repositorys.HospedagemRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping (value = "/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	@Autowired
	private HospedagemRepository hospedagemRepository;
	
	@GetMapping
	public ResponseEntity<List<Cliente>> findAll(){
		List <Cliente> clientes = clienteRepository.findAll();
		return ResponseEntity.ok().body(clientes);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Cliente> findById (@PathVariable long id ){
		Cliente cliente = clienteRepository.findById(id).get();
		
		return ResponseEntity.ok().body(cliente);
	}
	
	// Criar
	@PostMapping
	public Cliente createEmployee(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
		
	}
	
	//update
	@PutMapping("{id}")
	public ResponseEntity<Cliente> update(@PathVariable long id, @RequestBody Cliente clienteDetails){
		Cliente updateCliente = clienteRepository.findById(id).get();
		Destino destino = destinoRepository.findById(clienteDetails.getDestino().getId_Destino()).get();
		Hospedagem hospedagem = hospedagemRepository.findById(clienteDetails.getHospedagem().getId_Hospedagem()).get();
		
		updateCliente.setNome(clienteDetails.getNome());
		updateCliente.setIdade(clienteDetails.getIdade());
		updateCliente.setCPF(clienteDetails.getCPF());
		updateCliente.setTelefone(clienteDetails.getTelefone());
		updateCliente.setEndereco(clienteDetails.getEndereco());
		
		updateCliente.setDestino(destino);
		updateCliente.setHospedagem(hospedagem);
		
		clienteRepository.save(updateCliente);
		return ResponseEntity.ok(updateCliente);
	}
	
	//Delete
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable long id){
		Cliente destino = clienteRepository.findById(id).get();
		clienteRepository.delete(destino);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
