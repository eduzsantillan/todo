import { useState, useEffect } from "react";
import facts from "../data/Facts";

function Input(props) {
  const [taskName, setTaskName] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Add your task, for example : 'Buy milk'"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    const handlePlaceholderChange = (event) => {
      if (event.matches) {
        setPlaceholder("Add your task");
      } else {
        setPlaceholder(placeholder);
      }
    };

    handlePlaceholderChange(mediaQuery);
    mediaQuery.addListener(handlePlaceholderChange);
    return () => {
      mediaQuery.removeListener(handlePlaceholderChange);
    };
  }, []);

  const updatePlaceHolder = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    setPlaceholder(facts[randomNumber]);
  };

  return (
    <>
      <div className="form-task">
        <input
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
          onClick={() => {
            props.functionAdd(taskName);
            setTaskName("");
            updatePlaceHolder();
          }}
        >
          New Task
        </button>
      </div>
    </>
  );
}

export default Input;
