package com.agencia.turismo.entites;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Destino implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_Destino;
	private String Cidade;
	private String Pais;
	
	//lista
	@JsonIgnore
	@OneToMany(mappedBy = "destino")
	private List<Cliente> clientes = new ArrayList<Cliente>();
	
	// construtor vazio
	public Destino() {
		super();
	}

	//construtor cheio coloar o this na frente dos atributos.
	public Destino(Long id_Destino, String cidade, String pais) {
		super();
		this.Id_Destino = id_Destino;
		this.Cidade = cidade;
		this.Pais = pais;
	}
	
	// getters e setters, sem o serial version

	public Long getId_Destino() {
		return Id_Destino;
	}

	public void setId_Destino(Long id_Destino) {
		Id_Destino = id_Destino;
	}

	public String getCidade() {
		return Cidade;
	}

	public void setCidade(String cidade) {
		Cidade = cidade;
	}

	public String getPais() {
		return Pais;
	}

	public void setPais(String pais) {
		Pais = pais;
	}

	// lista 
	public List<Cliente> getClientes() {
		return clientes;
	}
	
	// hascode e equals somente com o Id
	@Override
	public int hashCode() {
		return Objects.hash(Id_Destino);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Id_Destino == other.Id_Destino;
	}
	
	
	
	
	
	
	

}
