import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styling/Todo.css';

function App() {
  return (
    <div className='container' >
    <header>
      <h2>TO-DO LIST</h2>
      {/* Add functionality to hide/show input when clicked (also change icon) */}
      <button id="toggleInputBtn"><FontAwesomeIcon icon={faPlus} /></button>
    </header>
    <TodoForm addTask={addTask} />
    <TodoList removeTask={removeTask} toggleCompleted={toggleCompleted} todoList={todoList} />
    <button className='clearButton' onClick={removeCompleted} >Clear Completed</button>
  </div>
  );
}

export default App;
