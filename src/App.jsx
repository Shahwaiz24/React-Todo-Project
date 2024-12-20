import { useEffect, useState } from 'react'
import TodoForm from './components/Todo-form'
import { TodoProvider, useTodoContext } from "./context"
import TodoItem from './components/Todo-items';


function App() {

  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("TodoTask")) || []);
  
  const addTodo = (todoAdd) => {
    setTodo((prev) => [...prev, { id: Math.floor(Math.random() * 100) +1, ...todoAdd }])
    
  }

  const updateTodo = (id, title) => {
    setTodo((prev) =>
      prev.map((eachTodo) => {
        if (eachTodo.id === id) {
          return { ...eachTodo, title };
        }
        return eachTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
  };
  const completeTodo = (id) => {
    setTodo((prev) =>
      prev.map((eachTodo) => {
        if (eachTodo.id === id) {
          return { ...eachTodo, completed: !eachTodo.completed };
        }
        return eachTodo;
      })
    );
  };

  useEffect(() => {
    // setTodo(JSON.parse(localStorage.getItem("TodoTask")));
    console.log("Todo Local: ",todo)
  }, [])
  
  useEffect(  () => {
    try {
     localStorage.setItem("TodoTask", JSON.stringify(todo));
      console.log("Todo Saved",localStorage.getItem("TodoTask"));

    } catch (error) {
      console.log(error);
    }
    
  }, [todo,setTodo])

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
              {todo.map((eachTodo) => {
                return (
                  <div key={eachTodo.id} className='w-full'>
                    <TodoItem todo={eachTodo} />
                  </div>
                );
              })}
                    </div>
                </div>
            </div>
      </TodoProvider> 
    </>
  )
}

export default App
