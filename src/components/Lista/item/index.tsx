import style from "../item/Item.module.scss";
import {IProdutos} from "../../../types/produtos";
import NumberInput from "../../NumberInput";

interface Props extends IProdutos{
    selecionaProduto : (produtoSelecionado: IProdutos) => void
}

export default function Item({id, descricao, valor, imagem, prazoValidade, estoque, quantidade, selecionado, adicionado, selecionaProduto}: Props){
    return (
        <div className={`${style.item} ${selecionado ? style
            .itemSelecionado : ''} ${adicionado ? style.itemCompletado : ''} `}
            onClick={() => !adicionado && selecionaProduto({
                id,
                descricao,
                valor,
                imagem,
                prazoValidade,
                estoque,
                quantidade,
                selecionado,
                adicionado
        })}>
            <h3>{descricao}</h3>
            <img className={style.paddingTop} src={imagem}/>
            <div className={style.view}>
                <span>Valor: </span><span>R$</span>
                <span>{valor}</span>
            </div>
            <div className={style.view}>
                <span>Validade: </span>
                <span>{prazoValidade}</span>
            </div>
            <div className={style.view}>
                <span>Estoque: </span>
                <span >{estoque}</span>
            </div>
            <NumberInput title="Quantidade" valor={quantidade} min={1} max={estoque} disabled={false} ></NumberInput>
            {adicionado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </div>
    )
}
