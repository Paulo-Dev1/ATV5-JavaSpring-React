package com.agencia.turismo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.turismo.entites.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {
	
	
	
	

}
