package com.dgc.oaktest.product.model;

import java.math.BigDecimal;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TB_PRODUTO")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID produtoId;

    private String nome;

    private String descricao;

    private BigDecimal valor;

    private Boolean disponivelParaVenda;

    public Produto() {
    }

    public UUID getProdutoId() {
        return produtoId;
    }

    public void setProdutoId(UUID produtoId) {
        this.produtoId = produtoId;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public Boolean getDisponivelParaVenda() {
        return disponivelParaVenda;
    }

    public void setDisponivelParaVenda(Boolean disponivelParaVenda) {
        this.disponivelParaVenda = disponivelParaVenda;
    }

}
