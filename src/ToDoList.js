import { useState } from "react";

import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";

export default function ToDoList() {
  const [allToDos, setAllToDos] = useState([]);

  function addToList(newToDo) {
    setAllToDos([...allToDos, newToDo]);
  }

  function deleteToDo(toDoId) {
    const newAllToDos = allToDos.filter(toDo => toDo.id !== toDoId);
    setAllToDos(newAllToDos);
  }

  function editToDo(toDoId, newTask) {
    const taskToEdit = allToDos.find(toDo => toDo.id === toDoId);
    const positionInList = allToDos.indexOf(taskToEdit);
    const newAllToDos = [...allToDos.slice(0, positionInList), {...taskToEdit, task: newTask}, ...allToDos.slice(positionInList + 1)];
    setAllToDos(newAllToDos);
  }

  function completeToDo(toDoId, isItCompleteString) {
    const isItComplete = isItCompleteString === "true" ? true : false;
    const taskToComplete = allToDos.find(toDo => toDo.id === toDoId);
    const positionInList = allToDos.indexOf(taskToComplete);
    const newAllToDos = [...allToDos.slice(0, positionInList), {...taskToComplete, isCompleted: isItComplete}, ...allToDos.slice(positionInList + 1)];
    setAllToDos(newAllToDos);
  }

  return (
    <> 
      <NewToDoForm addToList={addToList}/>
      {allToDos.map(({id, task, isCompleted}) => 
        <ToDo 
          key={id} 
          id={id} 
          task={task} 
          deleteToDo={deleteToDo} 
          editToDo={editToDo}
          completeToDo={completeToDo}
          isCompleted={isCompleted}
        />)
      }
    </>
  )

}