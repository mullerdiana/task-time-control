import { useState, Dispatch, SetStateAction } from "react";
import { Button } from "../Button";
import style from "./Form.module.scss";
import { Task } from "../../types/task";
import {v4 as uuidv4} from 'uuid';

interface FormProps {
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export function Form({ setTasks }: FormProps) {
  const [itemTask, setItemTask] = useState({ task: "", time: "00:00" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setItemTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((prevTasks: Task[]) => [
      ...prevTasks,
      { ...itemTask, selected: false, completed: false, id: uuidv4() },
    ]);
    setItemTask({ task: "", time: "00:00" });
  };

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione a tarefa</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Qual a tarefa"
          value={itemTask.task}
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={itemTask.time}
          onChange={handleChange}
          required
        ></input>
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  );
}
