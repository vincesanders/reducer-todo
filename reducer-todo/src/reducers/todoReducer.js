export default (state, action) => {
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