import "./TodoCounter.css"

function TodoCounter({completadas, total, loading}) {
  
  if(!loading){
    return (
      completadas == total?

      <h1 className="TodoCounter">Felicitaciones, completaste todas tus tareas! 🎉</h1>
    
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