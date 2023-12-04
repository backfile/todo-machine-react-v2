import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { TodoEmpty } from "../TodoEmpty/TodoEmpty"

function AppUi({
    error,
    loading,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    addTodo
}) {
  return (
    <>
      <TodoCounter completadas={completedTodos} total={totalTodos} loading={loading}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        addTodo={() => addTodo(searchValue)}
      />
      <TodoList>

        {loading && <TodoLoading/>}
        {error && <p>error</p>}
        {(!loading && searchedTodos.length == 0) && <TodoEmpty/>}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}

          />
        ))}
      </TodoList>
    </>
  );
}

export { AppUi };
