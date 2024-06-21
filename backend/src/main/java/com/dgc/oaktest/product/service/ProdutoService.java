package com.dgc.oaktest.product.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.dgc.oaktest.product.model.Produto;
import com.dgc.oaktest.product.repository.ProdutoRepository;

@Service
public class ProdutoService {
    private ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public Produto cadastrarProduto(Produto produto) {
        return this.produtoRepository.save(produto);
    }

    public Page<Produto> listar(String ordem, int pagina, int tamanho) {
        return this.produtoRepository.findAll(PageRequest.of(pagina, tamanho,
                ordem.equalsIgnoreCase("asc") ? Sort.by(Direction.ASC, "valor") : Sort.by(Direction.DESC, "valor")));
    }

}
