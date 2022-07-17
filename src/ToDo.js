import { forwardRef, useState } from "react";

import "./ToDo.css";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Icon, IconButton } from '@mui/material';
import { TextareaAutosize } from "@mui/base";
import FlipMove from 'react-flip-move';

const ToDo = forwardRef(({id, task, deleteToDo, editToDo, toggleComplete, isCompleted}, ref) => {

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
    if (!isEditing) setIsEditing(true);
    else {    
      editToDo(id, taskWhileEditing);
      setIsEditing(false);
    }
  }

  function handleToggle(event) {
    toggleComplete(id, !isCompleted);
  }

  return (
    <div ref={ref}>
      {isEditing && 
        <form className="ToDo" ref={ref} onSubmit={handleEdit}>
          <textarea className="ToDo-task ToDo-edit" autoFocus name="task" value={taskWhileEditing} onInput={handleInput}/>
          <IconButton onClick={handleEdit}>
            <CheckIcon sx={{color: "white"}}/>
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
              <EditIcon sx={{color: "white"}}/>
            </IconButton>

            <IconButton onClick={handleDelete}>
              <DeleteIcon sx={{color: "white"}}/>
            </IconButton>
          </div>
        </div>
      }
    </div>
  )
});

export default ToDo;