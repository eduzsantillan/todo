import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";
import Headline from "./components/Headline";

function App() {
  const [listTask, setListTask] = useState([]);
  const [indexTasks, setIndexTask] = useState(0);

  useEffect(() => {
    const orderedList = listTask.sort((a, b) => {
      return a.completed - b.completed;
    });
    setListTask(orderedList);
  }, [listTask]);

  const addTask = (newTask) => {
    if (!newTask) {
      return;
    }
    const task = {
      id: indexTasks,
      taskName: newTask,
      completed: false,
    };
    setListTask([task, ...listTask]);
    /*
    let newList = listTask;
    newList.unshift(task);
    setListTask(newList);*/
    setIndexTask(indexTasks + 1);
  };

  const deleteTask = (idTask) => {
    const filteredList = listTask.filter((task) =>
      task.id === idTask ? false : true
    );
    setListTask(filteredList);
  };

  const completeTask = (idTask) => {
    const filteredList = listTask.map((task) => {
      if (task.id === idTask) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    filteredList.sort((a, b) => {
      return a.completed - b.completed;
    });
    setListTask(filteredList);
  };

  return (
    <div className="main-container">
      <span className="copyrigth">
        Designed and developed by{" "}
        <a href="https://eduzsantillan-dev.vercel.app/" target="_blank">
          Eduardo Zuniga
        </a>
      </span>
      <Headline title="TODO LIST"></Headline>

      <div className="app-container">
        <Input functionAdd={addTask}></Input>
        <div className="task-list">
          {listTask.map((task, key) => {
            return (
              <Task
                task={task}
                functionDelete={deleteTask}
                id={key}
                functionCompleted={completeTask}
              ></Task>
            );
          })}
        </div>
      </div>

      {/*    <Navbar functionAdd={addTask}></Navbar>


      <div className="my-task-container">
        {listTask.map((task, key) => {
          return (
            <Task
              task={task}
              functionDelete={deleteTask}
              id={key}
              functionCompleted={completeTask}
            ></Task>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
