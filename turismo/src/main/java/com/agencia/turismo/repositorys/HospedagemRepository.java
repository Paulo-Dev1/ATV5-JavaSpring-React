package com.agencia.turismo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.turismo.entites.Hospedagem;

@Repository
public interface HospedagemRepository extends JpaRepository<Hospedagem, Long> {

}
