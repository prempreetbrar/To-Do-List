import "./ToDo.css";

import { forwardRef, useState } from "react";

import { Check, Edit, Delete } from "@mui/icons-material";
import { ButtonWithTooltip } from "./ButtonWithTooltip";



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
    setIsEditing(true);
  }

  function handleEditComplete(event) {
    /* when editing is finished we send the new task to the parent
       so it can update the item */
    updateItem(id, "task", taskWhileEditing);
    setIsEditing(false);
  }

  function handleToggle(event) {
    updateItem(id, "isCompleted", !isCompleted);
  }


  function EditForm() {
    return (
      <form className="ToDo">
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
    return (
      <ButtonWithTooltip title="Edit" onClick={handleEdit}>
        <Edit className="ToDo-icons"/>
      </ButtonWithTooltip>
    ); 
  }

  function EditCompleteButton() {
    return (
      <ButtonWithTooltip title="Save" onClick={handleEditComplete}>
        <Check className="ToDo-icons"/>
      </ButtonWithTooltip>
    );
  }

  function DeleteButton() {
    return (
      <ButtonWithTooltip title="Delete" onClick={handleDelete}>
        <Delete className="ToDo-icons"/>
      </ButtonWithTooltip>
    );
  }

  function ToDoTask() {
    return (
      <li className="ToDo-task" onClick={handleToggle}>
        <span className={`ToDo-task-text ${isCompleted ? "strikethrough" : ""}`}>
          {task}
        </span>
      </li>
    );
  }

  function ToDoDisplay() {
    /* the animation library requires a reference to the DOM node 
       that renders the list item */
    return (
      <div ref={ref} className={`ToDo ${isCompleted ? "completed" : ""}`}>
        {ToDoTask()}

        <div className="ToDo-buttons">
          {EditButton()}
          {DeleteButton()}
        </div>
      </div>
    );
  }


  return (
    <> {isEditing ? EditForm() : ToDoDisplay()} </>
  );
});

export default ToDo;