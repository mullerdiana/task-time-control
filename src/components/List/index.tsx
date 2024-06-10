import { Task } from "../../types/task";
import { Item } from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: Task[];
  selectTask: (selectedTask: Task) => void;
}

export function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listTask}>
      <h2>Tarefas da seção</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item 
            selectTask={selectTask}
            key={item.id}   
            {...item} />
        ))}
      </ul>
    </aside>
  );
}
