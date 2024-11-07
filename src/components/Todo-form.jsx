import React, { useState } from "react";
import { useTodoContext } from "../context/Todo-Context";

function TodoForm() {
const TodoContext = useTodoContext();
const {addTodo} = TodoContext;
const [inputText, setInputText] = useState("");

const handleInputChange = (e) => {
    setInputText(e.target.value);
};
const addTodotask = (e) => {
    addTodo(e.target.value);
};


    return (
        <form className="flex">
            <input
                type="text"
                value={inputText}
                onChange={(e)=> handleInputChange}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button value={inputText} onChange={(e)=> addTodotask} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;