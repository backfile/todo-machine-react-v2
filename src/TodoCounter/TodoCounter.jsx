import "./TodoCounter.css"


function TodoCounter({completadas, total, loading}) {

  
  if(!loading){
    return (
      total == 0 ?
      
      <h1 className="TodoCounter">Crea tu primer To Do!</h1>

      : completadas == total ? (
        <>
          <h1 className="TodoCounter">Felicitaciones, completaste todas tus tareas!</h1>
        </>
      )
      
    
      :

      <h1 className="TodoCounter">Haz completado {completadas} de {total} Tareas</h1>
  )
  }
  else{
    return (
      <h1 className="TodoCounter">
        Cargando...
      </h1>
    );
  }

}

export { TodoCounter }