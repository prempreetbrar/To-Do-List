import "./ToDo.css";

import { forwardRef, useState } from "react";

import { Check, Edit, Delete } from "@mui/icons-material";
import { Tooltip, IconButton } from '@mui/material';



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


  function EditForm() {
    return (
      <form className="ToDo" ref={ref}>
        <textarea 
          className="ToDo-task ToDo-edit" 
          autoFocus 
          value={taskWhileEditing} 
          onInput={handleInput}
        />

        {EditCompleteButton()}
      </form>
    );
  }

  function EditButton() {
    <Tooltip 
        placement="top" 
        arrow 
        title="Save"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'common.black',
              '& .MuiTooltip-arrow': {
                color: 'common.black',
              },
            },
          },
        }}
      >
        <IconButton onClick={handleEditComplete}>
          <Check className="ToDo-icons"/>
        </IconButton>
      </Tooltip>
  }

  function EditCompleteButton() {
    return (
      <Tooltip 
        placement="top" 
        arrow 
        title="Save"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'common.black',
              '& .MuiTooltip-arrow': {
                color: 'common.black',
              },
            },
          },
        }}
      >
        <IconButton onClick={handleEditComplete}>
          <Check className="ToDo-icons"/>
        </IconButton>
      </Tooltip>
    );
  }

  function ToDoTask() {
    return (
      <li className="ToDo-task" onClick={handleToggle}>
        <span className={`ToDo-task-text ${isCompleted ? "strikethrough" : ""}`}>{task}</span>
      </li>
    );
  }

  return (
    <>
      {isEditing && EditForm()}
      {!isEditing &&
        <div ref={ref} className={isCompleted ? "ToDo completed" : "ToDo"}>
          {ToDoTask()}


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
    </>
  )
});

export default ToDo;