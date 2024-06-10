import { Task } from "../../types/task";
import { Item } from "./Item";
import style from "./List.module.scss";


export function List({tasks}: {tasks:Task[]}) {
  
  return (
    <aside className={style.listTask}>
      <h2
       
      >
        Tarefas da seção
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
