import { Task } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends Task {
  selectTask: (selectedTask: Task) => void;
}

export function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''}`}
      onClick={() =>
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
