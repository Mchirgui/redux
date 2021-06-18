import  { ADD_TODO, DELETE_TODO, UPDATE_TODO,FILTER_TODO, TOGGLE_DONE} from "../actions/todoTypes"

const initState={
    todoList:[],
    filter:"all"
    // by default filter tooks All to display all the to do 
}
const todoReducer=(state=initState,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                todoList:[...state.todoList,payload]
                }
            case DELETE_TODO:
                return{
                ...state,
                todoList : state.todoList.filter((todo) => todo.id !== payload)
                }
            case UPDATE_TODO:
                return{
                
                    ...state,
                    //by clicking in the edit button, an input appears and dellet theold todo, this is how we use filter, wedelete the old one and creat new oe with a new  dezscription
                    
                    todoList:[...state.todoList.filter((todo) => todo.id !== payload.id),payload]
                    }   
            case FILTER_TODO:
                return{...state,filter:payload}
            case TOGGLE_DONE:
                return{...state,todoList:[...state.todoList.map((todo)=>todo.id === payload ? {...todo,isDone:!todo.isDone}:todo)]}
                

        default:
            return state
        }

}




export default todoReducer;
