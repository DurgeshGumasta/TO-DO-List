import React, { useState } from "react";
import TodoItem from "./To-do-item";
export default function ToDoList() {
    const [todos, setTodos] = useState([{}]);
    const [newTodos, setNewTodos] = useState('');
    function addTask() {
        if(newTodos.trim()){
            setTodos([...todos,{id:Date.now(),taks:newTodos}])
            setNewTodos('')
        }
        if(todos.length > 0){
            localStorage.setItem("todos",JSON.stringify(todos))
        }
    }
    return (
        <div>
            <input type="text"
                value={newTodos}
                onChange={(e) => setNewTodos(e.target.value)}
                placeholder="Enter you task"
            />
            <button onClick={addTask}>Add</button>
            {todos.map((data)=>(
                <TodoItem key={data.id} items={data.taks}/>
            ))}
        </div>
    )
}