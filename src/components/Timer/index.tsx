import { useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { Task } from "../../types/task";
import { Button } from "../Button";
import { Clock } from "./Clock";

import style from "./Timer.module.scss";

interface Props {
  selected: Task | undefined;
}

export function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>();
  if (selected?.time) {
    setTime(timeToSeconds(selected?.time));
  }
  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha uma tarefa e inicie o cronômetro</p>
      time:{time}
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
