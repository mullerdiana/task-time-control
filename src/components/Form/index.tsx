import style from "./Form.module.scss";
import { Button } from "../Button";

export function Form() {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione a tarefa a ser executada</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Qual a tarefa"
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
          required
        ></input>
      </div>

      <Button />
    </form>
  );
}
