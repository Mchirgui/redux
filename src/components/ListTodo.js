import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const ListToDo = ({todoList}) => {

    const filter  = useSelector(state => state.todos.filter)
    const filtrage = (todos,filter)=>{
        switch(filter){
            case 'all':
                return todos
            case 'Done':
            return todos.filter((todo)=>todo.isDone !== false)
            case 'undone':
                return todos.filter((todo)=>todo.isDone !== true)
            default:
                return todos

            // in this switch we filtered the todolist to display in every case the todolist wanted, the done list or the undone list or all , we destingue bettween them by the isDone
    }}
    return (
        <div>
            {
                filtrage(todoList,filter)?.map((todo) =>(<Todo todo={todo}  key={todo.id} />))
            }
        </div>
    )
}

export default ListToDo