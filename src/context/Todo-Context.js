import { createContext, useContext } from "react";

const TodoContext =  createContext({
    todo:[],
    addTodo: ()=>{},
    updateTodo:(id,title)=>{},
    deleteTodo: (id)=>{
    }
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = ()=>{
    return useContext(TodoContext)
}

