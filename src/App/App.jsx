import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUi } from './AppUi';
export default App;

function App() {
  const {
    item: todos,
    saveItems: saveTodos,
    error,
    loading
  } = useLocalStorage("TODOS_V1", [])

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => todo.completed).length 
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const punter = newTodos.findIndex(todo => todo.text == text)
    newTodos[punter].completed = true 
    saveTodos(newTodos);
  }

  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const punter = newTodos.findIndex(todo => todo.text == text);
    newTodos.splice(punter, 1)
    saveTodos(newTodos);
    
  };

  const addTodo = (newTodo) => {
    const newTodoo = [...todos];
    if (newTodo == ""){
      alert("No se permiten textos vacios")
    }else{
      newTodoo.push({ text: newTodo, completed: false });
      saveTodos(newTodoo);
      setSearchValue("");
    }
  }

  return (
    <AppUi
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    addTodo={addTodo}
    />
  )
}

