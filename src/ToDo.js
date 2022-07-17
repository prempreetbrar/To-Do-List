import "./ToDo.css";

import { forwardRef, useState } from "react";

import { Check, Edit, Delete } from "@mui/icons-material";
import { IconButton } from '@mui/material';



const ToDo = forwardRef(({id, task, isCompleted, deleteToDo, updateItem}, ref) => {
  /* we need to know whether to show the editing form and also control the
     value in the editing form using state */
  const [isEditing, setIsEditing] = useState(false);
  const [taskWhileEditing, setTaskWhileEditing] = useState(task);


  function handleInput(event) {
    setTaskWhileEditing(event.target.value);
  }

  function handleDelete(event) {
    deleteToDo(id);
  }

  function handleEdit(event) {
    event.preventDefault();
    setIsEditing(true);
  }

  function handleEditComplete(event) {
    updateItem(id, "task", taskWhileEditing);
    setIsEditing(false);
  }

  function handleToggle(event) {
    updateItem(id, "isCompleted", !isCompleted);
  }


  return (
    <div ref={ref}>
      {isEditing && 
        <form className="ToDo" ref={ref} onSubmit={handleEdit}>
          <textarea className="ToDo-task ToDo-edit" autoFocus name="task" value={taskWhileEditing} onInput={handleInput}/>
          <IconButton onClick={handleEditComplete}>
            <Check sx={{color: "white"}}/>
          </IconButton>
        </form>
      }

      {!isEditing &&
        <div ref={ref} className={isCompleted ? "ToDo completed" : "ToDo"}>
          {<li className="ToDo-task" onClick={handleToggle}>
            <span className={isCompleted ? "ToDo-task-text strikethrough" : "ToDo-task-text"}>{task}</span>
          </li>}
          <div className="ToDo-buttons">
            <IconButton onClick={handleEdit}>
              <Edit sx={{color: "white"}}/>
            </IconButton>

            <IconButton onClick={handleDelete}>
              <Delete sx={{color: "white"}}/>
            </IconButton>
          </div>
        </div>
      }
    </div>
  )
});

export default ToDo;