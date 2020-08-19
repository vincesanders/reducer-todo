import React, { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import todoReducer, { ADD_TASK, REMOVE_COMPLETED, REMOVE_TASK, TOGGLE_COMPLETE, initialState } from './reducers/todoReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styling/Todo.css';

function App() {
  const [{ todoList }, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='container' >
    <header>
      <h2>TO-DO LIST</h2>
      {/* Add functionality to hide/show input when clicked (also change icon) */}
      <button id="toggleInputBtn"><FontAwesomeIcon icon={faPlus} /></button>
    </header>
    <TodoForm dispatch={dispatch} ADD_TASK={ADD_TASK} />
    <TodoList todoList={todoList} dispatch={dispatch} REMOVE_TASK={REMOVE_TASK} TOGGLE_COMPLETE={TOGGLE_COMPLETE} />
    <button className='clearButton' onClick={() => dispatch({type: REMOVE_COMPLETED})} >Clear Completed</button>
  </div>
  );
}

export default App;
