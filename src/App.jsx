import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import { useState } from "react"
function App() {
  const [todos, setTodos]=useState([]);
  const [todoValue,setTodoValue]=useState('')

  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodos(index){
    setTodoValue(todos[index])
    handleDeleteTodos(index)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </>
  )
}

export default App
