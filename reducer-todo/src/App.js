import React, { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import todoReducer from './reducers/todoReducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styling/Todo.css';

const initialState = {
  todoList: [
    {
      task: 'Example Task 1',
      id: 1,
      completed: false
    },
    {
      task: 'Example Task 2',
      id: 2,
      completed: false
    }
  ]
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='container' >
    <header>
      <h2>TO-DO LIST</h2>
      {/* Add functionality to hide/show input when clicked (also change icon) */}
      <button id="toggleInputBtn"><FontAwesomeIcon icon={faPlus} /></button>
    </header>
    <TodoForm addTask={(task) => dispatch({type: 'ADD_TASK', payload: task})} />
    <TodoList todoList={state.todoList} removeTask={id => dispatch({type: 'REMOVE_TASK', payload: id})} toggleCompleted={id => dispatch({type: 'TOGGLE_COMPLETE', payload: id})} />
    <button className='clearButton' onClick={() => dispatch({type: 'REMOVE_COMPLETED'})} >Clear Completed</button>
  </div>
  );
}

export default App;
