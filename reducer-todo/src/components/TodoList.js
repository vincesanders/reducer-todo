import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, dispatch, REMOVE_TASK, TOGGLE_COMPLETE }) => {

    return (
        <ul>
            {/* Map over todoList to dynamically create Todo components */}
            {todoList.map(todoItem => {
                return (
                    <Todo key={todoItem.id} 
                        id={todoItem.id} 
                        task={todoItem.task} 
                        removeTask={() => dispatch({type: REMOVE_TASK, payload: todoItem.id})} 
                        toggleCompleted={() => dispatch({type: TOGGLE_COMPLETE, payload: todoItem.id})} />
                );
            })}
        </ul>
    );
}

export default TodoList;