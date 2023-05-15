import { useState } from "react";
import facts from "../data/Facts";

function Navbar(props) {
  const [taskName, setTaskName] = useState("");
  const [placeholder, setPlaceholder] = useState("Add your task");
  const [example, setExample] = useState("Do laundry");

  const updatePlaceHolder = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    setPlaceholder(facts[randomNumber]);
  };

  return (
    <>
      <div className="navbar">
        <div className="formTask">
          <input
            className="input-task"
            type="text"
            onChange={(event) => {
              setTaskName(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                props.functionAdd(taskName);
                setTaskName("");
                updatePlaceHolder();
              }
            }}
            placeholder={placeholder}
            value={taskName}
          ></input>
          <button
            className="new-task-button "
            onClick={() => {
              props.functionAdd(taskName);
              setTaskName("");
              updatePlaceHolder();
            }}
          >
            New Task
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
