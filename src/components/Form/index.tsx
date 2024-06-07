import { Button } from "../Button";

export function Form() {
  return (
    <form>
      <div>
        <label htmlFor="task">Adicione a tarefa a ser executada</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Qual a tarefa"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="time">Adicione a tarefa a ser executada</label>
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
