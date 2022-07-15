import { useState } from "react";

import {v4 as uuidv4} from "uuid";

export default function NewToDoForm({addToList}) {
  const [task, setTask] = useState("");

  function handleInput(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addToList({id: uuidv4(), task});
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="task" placeholder={"New Task"} onInput={handleInput} value={task}/>
      <button>ADD</button>
    </form>
  )
}