package com.agencia.turismo.entites;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Cliente implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_Cliente;
	private String Nome;
	private int Idade;
	private int CPF;
	private String Telefone;
	private String Endereco;
	
	//fazer conexão entre tabelas, "Chave Estrangeira."
	
	@ManyToOne
	@JoinColumn(name = "Id_Destino")
	private Destino destino;
	
	@ManyToOne
	@JoinColumn(name = "Id_Hospedagem")
	private Hospedagem hospedagem;

	public Cliente() {
		super();
	}

	public Cliente(Long id_Cliente, String nome, int idade, int cPF, String telefone, String endereco, Destino destino,
			Hospedagem hospedagem) {
		super();
		this.Id_Cliente = id_Cliente;
		this.Nome = nome;
		this.Idade = idade;
		this.CPF = cPF;
		this.Telefone = telefone;
		this.Endereco = endereco;
		this.destino = destino;
		this.hospedagem = hospedagem;
	}

	public Long getId_Cliente() {
		return Id_Cliente;
	}

	public void setId_Cliente(Long id_Cliente) {
		Id_Cliente = id_Cliente;
	}
	
	

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public int getIdade() {
		return Idade;
	}

	public void setIdade(int idade) {
		Idade = idade;
	}

	public int getCPF() {
		return CPF;
	}

	public void setCPF(int cPF) {
		CPF = cPF;
	}

	public String getTelefone() {
		return Telefone;
	}

	public void setTelefone(String telefone) {
		Telefone = telefone;
	}

	public String getEndereco() {
		return Endereco;
	}

	public void setEndereco(String endereco) {
		Endereco = endereco;
	}

	public Destino getDestino() {
		return destino;
	}

	public void setDestino(Destino destino) {
		this.destino = destino;
	}

	public Hospedagem getHospedagem() {
		return hospedagem;
	}

	public void setHospedagem(Hospedagem hospedagem) {
		this.hospedagem = hospedagem;
	}

	
	@Override
	public int hashCode() {
		return Objects.hash(Id_Cliente);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(Id_Cliente, other.Id_Cliente);
	}
	
	
	
	
	
	
	

}
