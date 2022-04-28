import style from ".//InputNumber.module.scss";

interface Props{
    title : string,
    valor : number,
    min: number,
    max: number,
    disabled: boolean
}

export default function NumberInput({title, valor, min, max, disabled = false}: Props){

    return (
        <div className={style.view}>
            <span>{title}: </span>
            <input type="number"
                   value={valor}
                   min={min}
                   max={max}
                   step={0.1}
                   readOnly={false}>
            </input>
        </div>
    )
}