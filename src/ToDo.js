import { useState } from "react";

export default function ToDo({id, task, deleteToDo, editToDo}) {
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

  return (
    <>
      {isEditing && 
        <form onSubmit={handleEdit}>
          <input name="task" id="editForm" value={taskWhileEditing} onInput={handleInput}/>
          <button>SUBMIT</button>
        </form>
      }

      {!isEditing &&
        <>
          <div>Task: {task}</div>
          <button onClick={handleDelete}>X</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      }
      
    </>
  )
}