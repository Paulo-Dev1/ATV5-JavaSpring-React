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
public class Hospedagem implements Serializable {

	/**
	 click no sublinhado amarelo para gerar essa linha abaixo.
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_Hospedagem;
	private String Tipo_Hospedagem;
	private String Data_Saida;
	private String Data_Entrada;
	
	//@JsonIgnore
	//@OneToMany(mappedBy="hospedagem")
	//private List<Cliente> clientes = new ArrayList<Cliente>();

	public Hospedagem() {
		super();
	}

	public Hospedagem(Long id_Hospedagem, String tipo_Hospedagem, String data_Saida, String data_Entrada) {
		super();
		this.Id_Hospedagem = id_Hospedagem;
		this.Tipo_Hospedagem = tipo_Hospedagem;
		this.Data_Saida = data_Saida;
		this.Data_Entrada = data_Entrada;
	}

	public Long getId_Hospedagem() {
		return Id_Hospedagem;
	}

	public void setId_Hospedagem(Long id_Hospedagem) {
		Id_Hospedagem = id_Hospedagem;
	}

	public String getTipo_Hospedagem() {
		return Tipo_Hospedagem;
	}

	public void setTipo_Hospedagem(String tipo_Hospedagem) {
		Tipo_Hospedagem = tipo_Hospedagem;
	}

	public String getData_Saida() {
		return Data_Saida;
	}

	public void setData_Saida(String data_Saida) {
		Data_Saida = data_Saida;
	}

	public String getData_Entrada() {
		return Data_Entrada;
	}

	public void setData_Entrada(String data_Entrada) {
		Data_Entrada = data_Entrada;
	}

	//public List<Cliente> getCliente() {
	//	return clientes;
	//}

	@Override
	public int hashCode() {
		return Objects.hash(Id_Hospedagem);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Hospedagem other = (Hospedagem) obj;
		return Objects.equals(Id_Hospedagem, other.Id_Hospedagem);
	}

	
	
	
	
	
	

}
