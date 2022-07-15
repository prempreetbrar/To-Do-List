import { useState } from "react";

import "./ToDo.css";

export default function ToDo({id, task, deleteToDo, editToDo, toggleComplete, isCompleted}) {
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
    toggleComplete(id);
  }

  return (
    <>
      {isEditing && 
        <form className="Todo" onSubmit={handleEdit}>
          <input name="task" id="editForm" value={taskWhileEditing} onInput={handleInput}/>
          <button>SUBMIT</button>
        </form>
      }

      {!isEditing &&
        <>
          {isCompleted && <li className="completed Todo" onClick={handleToggle}>Task: {task}</li>}
          {!isCompleted && <li className="Todo" onClick={handleToggle}>Task: {task}</li>}
          <button onClick={handleDelete}>X</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      }
    </>
  )
}