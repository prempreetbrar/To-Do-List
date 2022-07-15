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
    const newAllToDos = [...allToDos.slice(0, positionInList), {id: toDoId, task: newTask}, ...allToDos.slice(positionInList + 1)];
    setAllToDos(newAllToDos);
  }

  return (
    <> 
      <NewToDoForm addToList={addToList}/>
      {allToDos.map(toDo => <ToDo key={toDo.id} id={toDo.id} task={toDo.task} deleteToDo={deleteToDo} editToDo={editToDo}/>)}
    </>
  )

}