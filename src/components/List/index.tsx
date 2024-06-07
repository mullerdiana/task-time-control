import style from "./List.module.scss";

export function List() {
  const tasks = [
    {
      task: "Estudos do dia",
      time: "02:00:00",
    },
    {
      task: "Atividades casa",
      time: "01:00:00",
    },
    {
      task: "Exercícios",
      time: "01:30:00",
    },
  ];
  return (
    <aside className={style.listTask}>
      <h2>Tarefas da seção</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={style.item}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
