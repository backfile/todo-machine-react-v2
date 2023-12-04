import "./TodoList.css"

function TodoList({children}){
    return(
        <ul className="TodoList-container">
           {children}
        </ul>
    )
}

export { TodoList }