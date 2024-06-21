import { Link, useNavigate } from "react-router-dom";
import styles from './CadastrarProduto.module.css';

export default function CadastrarProduto() {
    const navigate = useNavigate();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nomeElement = form.elements.namedItem("nome") as HTMLInputElement;
        const descricaoElement = form.elements.namedItem("descricao") as HTMLInputElement;
        const valorElement = form.elements.namedItem("valor") as HTMLInputElement;
        const disponivelParaVendaElement = form.elements.namedItem("sim") as HTMLInputElement;
        const formData = {
            nome: nomeElement.value,
            descricao: descricaoElement.value,
            valor: parseFloat(valorElement.value),
            disponivelParaVenda: disponivelParaVendaElement.value === "on"
        }
        fetch("http://localhost:8080/api/v1/produto", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            alert("Produto cadastrado com sucesso!")
            navigate("/listarProdutos")
        }).catch(() => {
            alert("Produto inválido e não cadastrado!")
            form.reset();
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastro de produtos</h1>
            <form className={styles.containerForm} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.containerFormGroup}>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" />
                </div>

                <div className={styles.containerFormGroup}>
                    <label htmlFor="descricao">Descrição: </label>
                    <input type="text" id="descricao" name="descricao"></input>
                </div>

                <div className={styles.containerFormGroup}>
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" id="valor" name="valor" step="0.01" min="0"></input>
                </div>

                <div className={styles.containerFormGroup}>
                    <p>O produto está disponível para venda?</p>
                    <input type="radio" id="sim" name="disponivelParaVenda" defaultChecked></input>
                    <label htmlFor="sim">Sim</label>
                    <input type="radio" id="nao" name="disponivelParaVenda"></input>
                    <label htmlFor="nao">Não</label>
                </div>

                <div className={styles.containerBotoes}>
                    <button className={styles.botaoConfirmar} type="submit">Cadastrar</button>
                    <Link to={"/listarProdutos"}><button className={styles.botaoCancelar}>Cancelar</button></Link>
                </div>

            </form>
        </div>
    )
}