import React from "react";
import { useState } from "react";

function Task(props) {
  return (
    <div className="single-task">
      <div className="task-name">
        <input
          type="checkbox"
          id={"task-" + props.task.id}
          onChange={() => {
            props.functionCompleted(props.task.id);
          }}
          checked={props.task.completed}
        />
        <label
          style={{
            textDecoration: props.task.completed ? "line-through" : "",
            opacity: props.task.completed ? 0.5 : 1,
          }}
          htmlFor={"task-" + props.task.id}
        >
          {props.task.taskName}
        </label>
      </div>

      <div className="task-single-button">
        <img
          src="/bin.png"
          alt="bin"
          onClick={() => {
            props.functionDelete(props.task.id);
          }}
          style={{ cursor: "pointer", width: "20px", opacity: 0.5 }}
        />
      </div>
    </div>
  );
}

export default Task;
