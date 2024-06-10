import { Task } from "../../../types/task";
import style from "../List.module.scss";

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
  console.log("item atual: ", {
    task,
    time,
    selected,
    completed,
    id,
  });
  return (
    <li
      className={style.item}
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
