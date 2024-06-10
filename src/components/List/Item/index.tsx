import { Task } from "../../../types/task";
import style from "../List.module.scss";

export function Item({ task, time, selected, completed, id }: Task) {
  console.log("item atual: ", {
    task,
    time,
    selected,
    completed,
    id,
  });
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
