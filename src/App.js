import React from 'react'
import {useSelector } from 'react-redux'
import AddTask from './components/AddTask'
import ListToDo from './components/ListTodo'
import './App.css'




const App = () => {
    const todos = useSelector(state => state.todos)    
    return (
      <div className="App"> 
        <AddTask></AddTask>
        <div className='items'> 
          <ListToDo todoList={todos.todoList} />

        </div>
        
      </div>
    )
}
export default App