// src/App.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task].sort());
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={styles.container}>
      <Helmet>
        <title>My to-do list</title> {/* Change this text to your desired page name */}
      </Helmet>
      <div style={styles.todoList}>
        <h1>Todo List</h1>
        <input
          type="text"
          value={task}
  onChange={(e) => setTask(e.target.value)}
   placeholder="Enter a new task"
  style={styles.input}
   />
 <button onClick={handleAddTask} style={styles.button}>Add</button>
 <ul style={styles.list}>
{todos.map((todo, index) => (
   <li key={index} style={styles.listItem}>
   {todo}
 <button onClick={() => handleDeleteTask(index)} style={styles.deleteButton}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Styles object remains the same
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  todoList: {
    textAlign: 'center',
    backgroundColor: 'LightGrey',
    padding: '80px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    marginRight: '10px',
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    marginLeft: '10px',
    padding: '4px 8px',
    fontSize: '14px',
    color: 'red',
    border: 'none',
    cursor: 'pointer',
  },
};

export default App;
