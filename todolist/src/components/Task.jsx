import React from "react";

const Task = (props) => {

  const inputEvent=(event)=>{
    props.editTodo(event.target.value,props.index);
  }

  const deleteTask=()=>{
    props.onSelect(props.index)
  }

  return (
    <div className="task">
      <div className="taskInfo">
        <input type="checkbox" id={`check${props.index}`} className="checkbox" />
        <label className="checkLabel" htmlFor={`check${props.index}`}></label>
        <input type="text" className="taskInput" value={props.task} onChange={inputEvent}/>
      </div>
      <div className="delete" onClick={deleteTask}><i className="fa-solid fa-trash"></i></div>
    </div>
  );
};

export default Task;
