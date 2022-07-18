import "./NewToDoForm.css"

import { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import { Tooltip, IconButton } from "@mui/material";
import {v4 as uuidv4} from "uuid";
import { ButtonWithTooltip } from "./ButtonWithTooltip";



export default function NewToDoForm({addToList}) {
  const [task, setTask] = useState("");


  function handleInput(event) {
    setTask(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();
    addToList({id: uuidv4(), task, isCompleted: false});
    // empty the new task field after we've added our task to the list
    setTask("");
  }


  function AddButton() {
    return (
      <ButtonWithTooltip title="Add" onClick={handleAdd}>
          <AddIcon className="NewToDoForm-addIcon"/>
      </ButtonWithTooltip>
    );
  }

  
  return (
    <div className="NewToDoForm">
      <span>Add to the ToDo List</span>

      <form style={{display: "flex", alignItems: "center"}}>
        <textarea 
          className="NewToDoForm-taskInput" 
          name="task" 
          placeholder={"New Task"} 
          onInput={handleInput} 
          value={task}
        />
        {AddButton()}
      </form>
    </div>
  );
}