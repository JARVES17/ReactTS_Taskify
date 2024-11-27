import { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'
import { Todo } from './Components/model'
import TodoList from './Components/TodoList'


const App:React.FC=()=> {

  const [todo, setTOdo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  
  const handelAdd = (e:React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Math.floor(Math.random() * 100), todo: todo, isDone: false }]) 
      setTOdo("")
    }
   
  }
  return (
    <>
      <div className="App"> 
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTOdo} handelAdd={handelAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
