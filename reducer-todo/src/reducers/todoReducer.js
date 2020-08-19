export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';

export const initialState = {
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

export default (state=initialState, action) => {
    switch (action.type) {
        //must send a payload with task's id
        case 'TOGGLE_COMPLETE':
            return {todoList: state.todoList.map(task => {
                if (task.id === action.payload) {
                  return {
                    ...task,
                    completed: !task.completed
                  };
                } else {
                  return task;
                }
              })};
        //must send a payload with task's name
        case 'ADD_TASK':
            return {todoList: [...state.todoList, {
                task: action.payload,
                id: Date.now(),
                completed: false
            }]};
        //must send a payload with task's id
        case 'REMOVE_TASK':
            return {todoList: state.todoList.filter(task => task.id !== action.payload)};
        case 'REMOVE_COMPLETED':
            return {todoList: state.todoList.filter(task => task.completed === false)};
        default:
            return state;
    }
}