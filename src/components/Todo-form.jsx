import React, { useState } from "react";

function TodoForm({addTodoTask}) {
const [inputText, setInputText] = useState("");

const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log("Todo: " ,inputText)
};



    return (
        <form className="flex">
            <input
                type="text"
                value={inputText}
                onChange={(e)=> handleInputChange(e)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button value={inputText} onChange={(e) => addTodoTask(todoAdd={inputText})} type="button" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;