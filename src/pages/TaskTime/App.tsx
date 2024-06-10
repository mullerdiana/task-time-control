import React, { useState } from "react";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { Timer } from "../../components/Timer";
import style from "./App.module.scss";
import { Task } from "../../types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task>();

  function selectTask(selectedTask: Task){
    setSelected(selectedTask)
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks} 
        selectTask={selectTask}  
      />
      <Timer />
    </div>
  );
}

export default App;
