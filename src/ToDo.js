import { useState } from "react";

export default function ToDo({id, task, deleteToDo, editToDo, completeToDo, isCompleted}) {
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

  function handleComplete(event) {
    completeToDo(id, event.target.value);
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
          {isCompleted && <del>Task: {task}</del>}
          {!isCompleted && <p>Task: {task}</p>}
          <button onClick={handleDelete}>X</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      }
      {!isCompleted &&
        <button onClick={handleComplete} value="true">Mark as Completed</button>
      }
      {isCompleted &&
        <button onClick={handleComplete} value="false">Mark as Uncompleted</button>
      }
    </>
  )
}