import { Suspense, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import styles from './ListarProdutos.module.css';

interface ProdutoData {
    produtoId: string,
    nome: string,
    valor: number
}

export default function ListarProdutos() {
    const [produtos, setProdutos] = useState<ProdutoData[]>([]);
    const [listPaginas, setListPaginas] = useState([0]);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [ordem, setOrdem] = useState("asc");

    function handleChangeOrdem() {
        setOrdem((prevState) => (prevState === "asc" ? "desc" : "asc"));
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/produto/listar?ordem=${ordem}&pagina=${paginaAtual}&tamanho=5`, {
            method: "GET"
        }).then((res) => {
            res.json().then((data) => {
                setProdutos(data.content as ProdutoData[]);
                let newListPaginas = [];
                for (let i = 0; i < data.totalPages; i++) {
                    newListPaginas.push(i);
                }
                setListPaginas(newListPaginas);
            })
        })
    }, [ordem, paginaAtual])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lista de Produtos</h1>
            <Link className={styles.botaoCadastrarProduto} to={"/cadastrarProduto"}><button className={styles.botaoCadastrarProduto}>Cadastrar produto</button></Link>
            <table className={styles.containerProdutos}>
                <thead>
                    <tr className={styles.titulosProduto}>
                        <th>Nome</th>
                        <th>Valor <button className={styles.ordemBotao} onClick={handleChangeOrdem}>{ordem === "asc" ? ">" : "<"}</button></th>
                    </tr>
                </thead>
                <tbody>
                    <Suspense fallback={<TailSpin
                        visible={true}
                        height={80}
                        width={80}
                        color="#47b368"
                        ariaLabel="tail-spin-loader"
                        radius={1}
                    />}>
                        {produtos ? produtos.map((produto) => {
                            return (
                                <tr className={styles.produto} key={produto.produtoId}>
                                    <td>{produto.nome}</td>
                                    <td>R$ {produto.valor}</td>
                                </tr>
                            )
                        }) : <></>}
                    </Suspense>
                </tbody>
            </table>
            <div className={styles.containerBotaoPaginas}>
                <Suspense fallback={<TailSpin
                    visible={true}
                    height={80}
                    width={80}
                    color="#47b368"
                    ariaLabel="tail-spin-loader"
                    radius={1}
                />}>
                    {listPaginas.map((pagina) => {
                        return (
                            <button className={styles.botaoPagina} style={{ color: paginaAtual === pagina ? "white" : "#47b368", backgroundColor: paginaAtual === pagina ? "#47b368" : "white" }} key={pagina} onClick={() => setPaginaAtual(pagina)}>{pagina + 1}</button>
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}