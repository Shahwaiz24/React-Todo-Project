import { createContext, useContext } from "react";

const TodoContext =  createContext({
    todo: [
        {
            id: "1",
            title: "Todo msg",
            "completed": false
        }
    ],
    addTodo: ()=>{},
    updateTodo:(id,title)=>{},
    deleteTodo: (id)=>{
    },
    completeTodo: (id) => {
    }
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = ()=>{
    return useContext(TodoContext)
}

