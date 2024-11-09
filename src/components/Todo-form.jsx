import React, { useState } from "react";
// import { TodoProvider, useTodoContext } from "./context/index.js"
import { useTodoContext } from "../context/index.js"

function TodoForm() {
    const [todo, setTodo] = useState("");

    
    const handleInputChange = (e) => {
    setTodo(e.target.value);
    // console.log("Todo: " ,todo)
    };
    const {addTodo} = useTodoContext();
    const addTodoTask = (e) => {
        e.preventDefault(); 
        if (!todo) return
        addTodo({title: todo.toString(), completed: false })
      
        //   console.log( "Todo:",))
            setTodo("")
        
    }



    return (
        <form onSubmit={(e) => addTodoTask(e)} className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e)=> handleInputChange(e)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button value={todo} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;