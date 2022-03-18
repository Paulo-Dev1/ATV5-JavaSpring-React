package com.agencia.turismo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.turismo.entites.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
