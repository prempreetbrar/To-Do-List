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

  function deleteToDo(idOfTaskToDeleted) {
    const newAllToDos = allToDos.filter(toDo => toDo.id !== idOfTaskToDeleted);
    setAllToDos(newAllToDos);
  }

  function updateItem(idOfItemToUpdate, key, updatedValue) {
    const itemToUpdate =  allToDos.find(toDo => toDo.id === idOfItemToUpdate);
    const positionInList = allToDos.indexOf(itemToUpdate);
    const newAllToDos = [
      ...allToDos.slice(0, positionInList), 
      {...itemToUpdate, [key]: updatedValue}, 
      ...allToDos.slice(positionInList + 1)
    ];
    setAllToDos(newAllToDos);
  }


  function toggleSorted(event) {
    setIsSorted(isSorted => !isSorted);
  }

  function getSortedToDos() {
    const sortedToDos = [...allToDos];
    // JavaScript coerces the booleans to 0 or 1 (depending on if it is false or true)
    sortedToDos.sort((task1, task2) => task1.isCompleted - task2.isCompleted);
    return sortedToDos;
  }


  function Title() {
    return (
      <h1>
        ToDo List
        <span>Prioritize your goals and maximize productivity</span>
      </h1>
    );
  }

  function ToDoListItems(list) {
    /* we need optional chaining because the list is null when local storage is empty
       (ie. when app is opened for the first time or cookies have just been cleared) */
    return (
      list?.map(toDoItem => 
        <ToDo 
          className="move"
          key={toDoItem.id} 
          {...toDoItem}
          deleteToDo={deleteToDo}
          updateItem={updateItem}
        />
      )
    );
  }

  function SortByCompletionPrompt() {
    return (
      <span className="ToDoList-moveDone">
        Move done items at the end?
        <Switch className="ToDoList-moveDone-switch" color="default" onChange={toggleSorted} />
      </span>
    );
  }


  return (
    <div className="ToDoList"> 
      {Title()}

      <div className="ToDoList-flip">
        <FlipMove
          staggerDurationBy="30"
          duration={500}
          enterAnimation="fade"
          leaveAnimation="none"
          typeName="ol"
        >
          {!isSorted && ToDoListItems(allToDos)}
          {isSorted && ToDoListItems(getSortedToDos())}
        </FlipMove>
      </div>
  
      {SortByCompletionPrompt()}
      <NewToDoForm addToList={addToList}/>
    </div>
  );
}