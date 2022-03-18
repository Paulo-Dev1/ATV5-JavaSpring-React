package com.agencia.turismo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.agencia.turismo.entites.Destino;
import com.agencia.turismo.repositorys.ClienteRepository;
import com.agencia.turismo.repositorys.DestinoRepository;
import com.agencia.turismo.repositorys.HospedagemRepository;

@SpringBootApplication
public class TurismoApplication implements CommandLineRunner {

	@Autowired
	private DestinoRepository destinoRepository;
	
	@Autowired
	private HospedagemRepository hospedagemRepository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(TurismoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		/*
		Destino d1 = new Destino (null, "Salvador","Brasil");
		Destino d2 = new Destino (null, "Nova York","EUA");
		
		destinoRepository.save(d1);
		destinoRepository.save(d2);
		*/
		
	}

}
