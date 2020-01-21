import React from 'react';
import Todo from './Todo';

export default ({ todoList, toggleCompleted, removeTask }) => {
    return (
        <ul>
            {/* Map over todoList to dynamically create Todo components */}
            {todoList.map(todoItem => {
                return (
                    <Todo key={todoItem.id} id={todoItem.id} task={todoItem.task} toggleCompleted={toggleCompleted} removeTask={removeTask} />
                );
            })}
        </ul>
    );
}