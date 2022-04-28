import React, {useEffect, useMemo, useState} from 'react';
import style from './App.module.scss';
import Lista from "../components/Lista";
import {IProdutos} from "../types/produtos";

export function App() {
    const [produtos, setProdutos] = useState<IProdutos[]>([]);
    const [selecionado, setSelecionado] = useState<IProdutos>();
    const [carrinho, setCarrinho] = useState<IProdutos[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        fetch('./produtos.json', {
        headers: {
            Accept: "application/json"
        }
        }).then(res => res.json())
            .then(res => setProdutos(res.data)
            )
        }, []);

    function selecionaProduto(produtoSelecionado: IProdutos) {
        setSelecionado(produtoSelecionado);
        setProdutos(produtosAnteriores => produtosAnteriores.map(produto => ({
            ...produto,
            selecionado: produto.id === produtoSelecionado.id ? true : false,
        })))

        if(selecionado){
            setCarrinho(produtoAdicionado => [...produtoAdicionado, produtoSelecionado]);
        }
        setTotal(carrinho.reduce(function (acumulador, objetoAtual){
            return acumulador + + (objetoAtual.quantidade * objetoAtual.valor);
        }, 0));
    }

    return (
        <div className="App">
            <div>
                <div className={style.header}>
                    <h1>Super Online</h1>
                </div>
                <div className={style.AppStyle}>
                    <div>
                        <h1>Produtos</h1>
                        <Lista
                            produtos={produtos}
                            selecionaProduto={selecionaProduto}></Lista>
                    </div>
                    <div>
                        <h1>Carrinho</h1>
                        <div className={style.valorTotal}>
                            <h2>Valor Total:</h2><h2>{total}</h2>
                        </div>
                        {
                            carrinho.map((array) => {
                                return (
                                    <my-accordion
                                        label={array.descricao}
                                        description={array.quantidade}
                                        color='#439ECA'
                                        width="300px">
                                    </my-accordion>
                                )})
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
