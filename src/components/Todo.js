import React from 'react'
import {  Button } from 'react-bootstrap'
import {  useDispatch } from "react-redux";
import { useState }  from 'react'

import '../App.css'
import { deleteToDo , toggletodo, updateToDo} from '../redux/actions/todoActions';


const Todo = ({todo}) => {

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const [newDesc, setNewDesc] = useState(todo.description);
    // we used useState here because we will modify it later


    return (
        <div className="description App" style={{backgroundColor: todo.isDone ? 'lightgreen' : 'tomato'}} >
            {/* if it is done it will display with  a green background (just check it ) else it will display with tomato backgourd color  */}
            {/* //wehen we click update, the edit change to true and display an input in place of the h2  */}
            {edit ? (
                <input
                type="text"
                required="true"
                value={newDesc}
                onChange={(e) => {
                    setNewDesc(e.target.value);
                }}
                />
            ) : (
                <h2 style={{paddingLeft:20}} >
                {todo.description}
                </h2>
            )}
                <input
                    type="checkbox"
                    name="toggleSwitch"
                    id="toggleSwitch"
                    checked={todo.isDone}
                    style={{ height:20,width:20, margin:10,marginButtom:10 }}
                    onClick={()=>{dispatch(toggletodo(todo.id))}}
                    />

                <Button
                size='lg'
                color="primary"
                onClick={() => {
                dispatch(updateToDo({ ...todo, description: newDesc }));
                if (edit) {
                    setNewDesc(todo.description);
                }
                setEdit(!edit);
                }}
            >
                {edit ? "Update" : "Edit"}</Button>
                <Button variant="danger" size='lg' onClick={() => dispatch(deleteToDo(todo.id))} >Delete</Button>


        </div>
    )
}

export default Todo