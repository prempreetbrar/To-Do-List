import "./ToDoList.css"

import { useEffect, useState } from "react";

import Switch from '@mui/material/Switch';
import FlipMove from 'react-flip-move';
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";



export default function ToDoList() {
  const [allToDos, setAllToDos] = useState(null);
  const [isSorted, setIsSorted] = useState(false);


  useEffect(() => {
    /* on every "first" render, allToDos is set to null. However,
       we don't want to put this in storage and override our stored tasks */
    if (allToDos) {
      localStorage.setItem("allToDos", JSON.stringify(allToDos));
    }
  }, [allToDos]);


  useEffect(() => {
    const allToDosFromStorage = JSON.parse(localStorage.getItem("allToDos"));
    /* we are fine with allToDos being null since we initialize it to null anyway;
       no conditional check is needed (albeit this only applies if user clears cookies
       or is rendering app for first time) */
    setAllToDos(allToDosFromStorage);
  }, [])


  function addToList(newToDo) {
    setAllToDos([...allToDos || [], newToDo]);
  }

  function deleteToDo(idOfTaskToDelete) {
    const newAllToDos = allToDos.filter(toDo => toDo.id !== idOfTaskToDelete);
    setAllToDos(newAllToDos);
  }

  function editToDo(idOfItemToEdit, newTask) {
    updateItem(idOfItemToEdit, "task", newTask);
  }


  function toggleComplete(idOfItemToComplete, newBoolean) {
    updateItem(idOfItemToComplete, "isCompleted", newBoolean);
  }

  function updateItem(idOfItemToUpdate, key, updatedValue) {
    const itemToUpdate =  allToDos.find(toDo => toDo.id === idOfItemToUpdate);
    const positionInList = allToDos.indexOf(itemToUpdate);
    const newAllToDos = [...allToDos.slice(0, positionInList), {...itemToUpdate, [key]: updatedValue}, ...allToDos.slice(positionInList + 1)];
    setAllToDos(newAllToDos);
  }

  function toggleSorted(event) {
    setIsSorted(isSorted => !isSorted);
  }

  function getSortedToDos() {
    const sortedToDos = [...allToDos];
    sortedToDos.sort((task1, task2) => {
      const isTask1Done = task1.isCompleted;
      const isTask2Done = task2.isCompleted;
      return isTask1Done - isTask2Done;
    });
    return sortedToDos;
  }

  return (
    <div className="ToDoList"> 
      <h1>
        ToDo List
        <span>Prioritize your goals and maximize productivity</span>
      </h1>
      <FlipMove
        staggerDurationBy="30"
        duration={500}
        enterAnimation="fade"
        leaveAnimation="none"
        typeName="ol"
      >
        {!isSorted && 
            allToDos?.map(toDoItem => 
            <ToDo 
              className="move"
              key={toDoItem.id} 
              {...toDoItem}
              deleteToDo={deleteToDo} 
              editToDo={editToDo}
              toggleComplete={toggleComplete}
            />)
        }
        {isSorted && 
          getSortedToDos()?.map(toDoItem => 
            <ToDo 
            className="move"
              key={toDoItem.id} 
              {...toDoItem}
              deleteToDo={deleteToDo} 
              editToDo={editToDo}
              toggleComplete={toggleComplete}
            />)
        }
      </FlipMove>
      <span id="moveDone" style={{alignSelf: "flex-end"}}>
        Move done items at the end?
        <Switch color="default" sx={{marginBottom: "0.2rem"}} onChange={toggleSorted} />
      </span>
      <NewToDoForm addToList={addToList}/>
    </div>
  )

}