import { useState } from "react";

import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";
import "./ToDoList.css"

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

  function toggleComplete(toDoId) {
    const taskToComplete = allToDos.find(toDo => toDo.id === toDoId);
    const positionInList = allToDos.indexOf(taskToComplete);
    const newAllToDos = [...allToDos.slice(0, positionInList), {...taskToComplete, isCompleted: !taskToComplete.isCompleted}, ...allToDos.slice(positionInList + 1)];
    setAllToDos(newAllToDos);
  }

  return (
    <div className="ToDoList"> 
      <h1>
        ToDo List
        <span>Prioritize your goals and maximize productivity</span>
      </h1>
      <ul>
        {allToDos.map(toDoItem => 
          <ToDo 
            key={toDoItem.id} 
            {...toDoItem}
            deleteToDo={deleteToDo} 
            editToDo={editToDo}
            toggleComplete={toggleComplete}
          />)
        }
      </ul>
      <NewToDoForm addToList={addToList}/>
    </div>
  )

}