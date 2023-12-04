import React from "react";
import "./TodoLoading.css"


function TodoLoading(){
    return (
      <div className="loading-container">
        <div className="loading uno">.</div>
        <div className="loading dos">.</div>
        <div className="loading tres">.</div>
      </div>
    );
}


export { TodoLoading }