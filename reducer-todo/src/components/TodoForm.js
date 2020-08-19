import React, { useState } from 'react';

export default ({ dispatch, ADD_TASK }) => {
    const [task, setTask] = useState('');

    const handleSubmit = e => {
        //Add the task when you press enter.
        if (e.which === 13 && e.target.value !== '') {
            e.preventDefault();
            dispatch({type: ADD_TASK, payload: task});
            setTask('')
        }
    }

    const handleChange = e => {
        setTask(e.target.value);
    }

    return (
        <input onKeyDown={handleSubmit} onChange={handleChange} type='test' placeholder='Add New Todo' value={task} />
    );
}