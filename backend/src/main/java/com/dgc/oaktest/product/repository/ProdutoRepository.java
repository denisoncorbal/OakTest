package com.dgc.oaktest.product.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dgc.oaktest.product.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, UUID> {
}