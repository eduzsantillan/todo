function Task(props) {
  return (
    <div
      className="task"
      style={{
        backgroundColor: props.task.completed ? "#22252e" : "white",
        color: props.task.completed ? "white" : "#22252e",
      }}
    >
      <h1
        style={{
          textDecoration: props.task.completed ? "line-through" : "",
          opacity: props.task.completed ? 0.5 : 1,
        }}
        key={props.task.id}
      >
        {props.task.taskName}
      </h1>
      <div className="task-button-container">
        {!props.task.completed && (
          <button
            className="task-button"
            onClick={() => {
              props.functionCompleted(props.task.id);
            }}
          >
            Done!
          </button>
        )}

        <button
          className="task-button"
          onClick={() => {
            props.functionDelete(props.task.id);
          }}
        >
          Delete!
        </button>
      </div>
    </div>
  );
}

export default Task;
