import React from "react";
import "./TodoSearch.css"
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

function TodoSearch({searchValue, setSearchValue, addTodo}){

  
    return (
      <div className="container">
        <input 
        className="input" 
        type="text" 
        value={searchValue}
        placeholder="Añadir o filtrar tareas"
        onChange={(Event)=>{
          setSearchValue(Event.target.value)
        }} />
        <CreateTodoButton addTodo={addTodo}/>
        
      </div>
    );
}

export { TodoSearch }