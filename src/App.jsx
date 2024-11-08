import { useState } from 'react'
import TodoForm from './components/Todo-form'
import { TodoProvider, useTodoContext } from "./context"


function App() {

  const [todo, setTodo] = useState([]);
  
  const addTodo = ({todoAdd}) => {
    setTodo((prev) => [...prev, { "id": Math.floor(Math.random()), todoAdd }])
    console.log("Todo : ",todo)
  }

  const updateTodo = (id, title) => { 
    setTodo((prev) => {
      prev.map((eachTodo) => {
        if (eachTodo.id === id) {
          eachTodo.title = title;
        }
      })
    })
  }

  const deleteTodo = (id) => {
    setTodo((prev) => {
      prev.filter((eachTodo) => eachTodo.id !== id);    })
   }

  const completeTodo = (id) => {
    setTodo(prev.map((eachTodo) => {
      if (eachTodo.id === id) {
        eachTodo.completed = !eachTodo.completed;
      }
    }
    )
    )
   }

  return (
    <>
    <TodoProvider value={{todo,addTodo,updateTodo,deleteTodo,completeTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm addTodoTask={addTodo}/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
      </TodoProvider> 
    </>
  )
}

export default App
