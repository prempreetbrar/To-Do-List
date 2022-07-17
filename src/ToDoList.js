import "./ToDoList.css"

import { useEffect, useState } from "react";

import Switch from '@mui/material/Switch';
import FlipMove from 'react-flip-move';
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";



export default function ToDoList() {
  const [allToDos, setAllToDos] = useState([]);
  const [isSorted, setIsSorted] = useState(false);


  useEffect(() => {
    /* on every "first" render, allToDos is set to an empty list. However,
       we don't want to put this in storage and override our stored tasks */
    if (allToDos.length > 0) {
      localStorage.setItem("allToDos", JSON.stringify(allToDos));
    }
  }, [allToDos]);


  useEffect(() => {
    const allToDosFromStorage = JSON.parse(localStorage.getItem("allToDos"));
    /* on the very first render ever or after clearing cookies, local storage is null, 
       in these situations we don't want to make our ToDos null and instead want to keep
       an empty list */
    if (allToDosFromStorage) {
      setAllToDos(allToDosFromStorage);
    }
  }, [])


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
            allToDos.map(toDoItem => 
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
          getSortedToDos().map(toDoItem => 
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