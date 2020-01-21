import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const Todo = props =>  {
    const icon = useRef();
    const rotateIn = (e) => {
       icon.current.classList.remove('rotateOut');
       icon.current.classList.add('rotateIn'); 
    }
    const rotateOut = (e) => {
        icon.current.classList.remove('rotateIn');
        icon.current.classList.add('rotateOut');
    }
    const handleClick = e => {
        e.target.classList.toggle('done');
        props.toggleCompleted(props.id);
    }
    //TODO: Add functionality to make deleted item slide up and then disappear
    return (
        <li className='listItem' onMouseEnter={rotateIn} onMouseLeave={rotateOut}>
            <span className='deleteItemBtn' onClick={() => props.removeTask(props.id)} >
                <span ref={icon} >
                    <FontAwesomeIcon className='icon' icon={faMinusCircle} />
                </span>
            </span>
            <span className='task' onClick={handleClick} >{props.task}</span>
        </li>
    );
}

export default Todo;