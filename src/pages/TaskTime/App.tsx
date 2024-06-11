import React, { useState } from "react";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { Timer } from "../../components/Timer";
import style from "./App.module.scss";
import { Task } from "../../types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task>();

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask);
    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function completeTask() {
    if (selected) {
      setSelected(undefined)
      setTasks((previousTasks) =>
        previousTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} completeTask={completeTask}/>
    </div>
  );
}

export default App;
