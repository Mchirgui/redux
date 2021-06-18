import { ADD_TODO, DELETE_TODO,UPDATE_TODO, FILTER_TODO, TOGGLE_DONE} from "./todoTypes"

export const addTodo=(newToDo)=>{
    if (newToDo.description.trim() === '') return {type:'ADD_FAIL'}
    // to make the input doesbt accept add when it is empty
    
    else return{
        type:ADD_TODO,
        payload:newToDo
        // the payload tooks the new todo 

    }
}

export const deleteToDo=(id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
  }

export function updateToDo(task) {
    return {
      type: UPDATE_TODO,
      payload: task
    }
}
export const filterToDo=(done) => {
    return {
        type: FILTER_TODO,
        payload: done
    }
}

export const toggletodo=(id) => {
    return {
        type: TOGGLE_DONE,
        payload: id
    }
}