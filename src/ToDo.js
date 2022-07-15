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
        <form className="ToDo" onSubmit={handleEdit}>
          <input name="task" id="editForm" value={taskWhileEditing} onInput={handleInput}/>
          <button>SUBMIT</button>
        </form>
      }

      {!isEditing &&
        <div className="ToDo">
          {isCompleted && <li className="ToDo-task completed" onClick={handleToggle}>Task: {task}</li>}
          {!isCompleted && <li className="ToDo-task" onClick={handleToggle}>Task: {task}</li>}
          <div className="ToDo-buttons">
            <button onClick={handleDelete}>X</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      }
    </>
  )
}