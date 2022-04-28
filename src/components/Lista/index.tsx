import style from './Lista.module.scss'
import Item from "./item";
import {IProdutos} from "../../types/produtos";

interface Props{
    produtos: IProdutos[]
    selecionaProduto : (produtoSelecionado: IProdutos) => void
}

function Lista({ produtos, selecionaProduto }: Props){
    return (
        <aside className={style.listaProdutos}>
            <div className={style.divProduto}>
                {produtos.map(item => (
                    <Item
                        selecionaProduto={selecionaProduto}
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </aside>
    )
}

export default Lista;