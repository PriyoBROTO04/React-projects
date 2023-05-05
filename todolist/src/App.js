import React, { useState } from "react";
import Task from "./components/Task";
import fullDate from "./dateTime";

function App() {
  const [items, setItems] = useState(() => {
    if (localStorage.getItem("items")) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  });

  const AddNewTask = () => {
    setItems((prevItems) => {
      localStorage.setItem("items", JSON.stringify([...prevItems, "New Task"]));
      return [...prevItems, "New Task"];
    });
  };

  const editTodo = (value, ind) => {
    setItems((prevItems) => {
      prevItems[ind] = value;
      localStorage.setItem("items", JSON.stringify([...prevItems]));
      return [...prevItems];
    });
  };

  const deleteTask = (ind) => {
      const newItems = items.filter((elem, index) => {
        return index !== ind;
      });
      localStorage.setItem("items", JSON.stringify(newItems));
      setItems(newItems);
  };

  return (
    <div className="main">
      <div className="info">
        <div>
          <div className="currDay">
            <span className="weekDay">{fullDate.day},</span> {fullDate.date}
          </div>
          <div className="currMonth">{fullDate.month}</div>
        </div>
        <div className="taskCount">
          <span>{items.length}</span> Tasks
        </div>
        <button className="addTask" onClick={AddNewTask}>
          +
        </button>
      </div>

      <div className="tasks">
        {items.map((val, index) => {
          return (
            <Task
              task={val}
              index={index}
              key={index}
              editTodo={editTodo}
              onSelect={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
