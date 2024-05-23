import React, { useState } from 'react';

function List() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('toDo');

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), name: input, status: selectedStatus } ]);
      setInput('');
    }
  };

  const handleStatusChange = (todoId, newStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId? {...todo, status: newStatus } : todo
      )
    );
  };

  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id!== todoId));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
        <option value="toDo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={handleAddTodo}>Add Todo</button>
      <h2>To Do</h2>
      <ul>
        {todos
        .filter((todo) => todo.status === 'toDo')
        .map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => handleStatusChange(todo.id, 'inProgress')}>
                Move to In Progress
              </button>
              <button onClick={() => handleRemoveTodo(todo.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
      <h2>In Progress</h2>
      <ul>
        {todos
        .filter((todo) => todo.status === 'inProgress')
        .map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => handleStatusChange(todo.id, 'completed')}>
                Move to Completed
              </button>
              <button onClick={() => handleRemoveTodo(todo.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
      <h2>Completed</h2>
      <ul>
        {todos
        .filter((todo) => todo.status === 'completed')
        .map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => handleStatusChange(todo.id, 'toDo')}>
                Move to To Do
              </button>
              <button onClick={() => handleRemoveTodo(todo.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default List;