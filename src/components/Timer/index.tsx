import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { Task } from "../../types/task";
import { Button } from "../Button";
import { Clock } from "./Clock";

import style from "./Timer.module.scss";

interface Props {
  selected: Task | undefined;
  completeTask: () => void;
}

export function Timer({ selected, completeTask }: Props) {
  const [time, setTime] = useState<number>();

  function timer(counting: number = 0) {
    setTimeout(() => {
      if (counting > 0) {
        setTime(counting - 1);
        return timer(counting - 1);
      }
      completeTask();
    }, 1000);
  }

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time));
    }
  }, [selected]);

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => timer(time)}>Começar</Button>
    </div>
  );
}
