// TodoList.js
import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState({});
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setTaskStatus((prevStatus) => ({ ...prevStatus, [newTask]: "start" }));
    setNewTask("");
  };

  const handleUpdateStatus = (task, status) => {
    setTaskStatus((prevStatus) => ({
      ...prevStatus,
      [task]: status,
    }));
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add task"
        className="input-field"
      />
      <button onClick={handleAddTask} className="add-button">
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task} className="task-item">
            {task}
            <button
              style={{
                backgroundColor:
                  taskStatus[task] === "start"
                    ? "red"
                    : "",
              }}
              onClick={() => handleUpdateStatus(task, "start")}
              className="status-button"
            >
              Start
            </button>
            <button
              style={{
                backgroundColor:
                  taskStatus[task] === "inprogress"
                    ? "yellow"
                    : "",
              }}
              onClick={() => handleUpdateStatus(task, "inprogress")}
              className="status-button"
            >
              In Progress
            </button>
            <button
              style={{
                backgroundColor:
                  taskStatus[task] === "completed"
                    ? "green"
                    : "",
              }}
              onClick={() => handleUpdateStatus(task, "completed")}
              className="status-button"
            >
              Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;