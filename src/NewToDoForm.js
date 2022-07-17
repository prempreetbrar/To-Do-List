import "./NewToDoForm.css"

import { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";

import {v4 as uuidv4} from "uuid";

export default function NewToDoForm({addToList}) {
  const [task, setTask] = useState("");

  function handleInput(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addToList({id: uuidv4(), task, isCompleted: false});
    setTask("");
  }

  return (
    <div className="NewToDoForm">
      <span>Add to the ToDo List
      </span>
      <form>
        <textarea className="NewToDoForm-taskInput" name="task" placeholder={"New Task"} onInput={handleInput} value={task}/>
        <IconButton sx={{marginLeft: "0.5rem", marginBottom: "3rem"}}onClick={handleSubmit}>
          <AddIcon fontSize="large" sx={{color: "white"}}/>
        </IconButton>
      </form>
    </div>
  )
}