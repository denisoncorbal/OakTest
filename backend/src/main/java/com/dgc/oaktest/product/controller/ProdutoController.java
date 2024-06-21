package com.dgc.oaktest.product.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dgc.oaktest.product.model.Produto;
import com.dgc.oaktest.product.service.ProdutoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/produto")
@CrossOrigin("http://localhost:5173")
public class ProdutoController {
    private ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping("")
    public ResponseEntity<Produto> cadastrarProduto(@RequestBody @Valid Produto produto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.produtoService.cadastrarProduto(produto));
    }

    @GetMapping("/listar")
    public ResponseEntity<Page<Produto>> listar(
            @RequestParam(value = "ordem", required = false, defaultValue = "asc") String ordem,
            @RequestParam(value = "pagina", required = false, defaultValue = "0") int pagina,
            @RequestParam(value = "tamanho", required = false, defaultValue = "10") int tamanho) {
        return ResponseEntity.ok(this.produtoService.listar(ordem, pagina, tamanho));
    }

}
