import { Button } from "../Button";
import { Clock } from "./Clock";

import style from './Timer.module.scss';

export function Timer(){
    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha uma tarefa e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
        <Clock />
            </div>
            <Button>Começar</Button>
        </div>
    )
}