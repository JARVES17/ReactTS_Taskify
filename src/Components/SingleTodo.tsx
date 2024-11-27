import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import "./style.css"


type Props={
  todo:Todo,
  todos:Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const[edit,setEdit]=useState<boolean>(false)
  const[editTodo,setEditTodo]=useState<string>(todo.todo)

  const handelDone = (id:number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  
  }
  const handelDelete = (id:number) => {
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  const handelEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map((todo)=>todo.id===id?{...todo,todo:editTodo}:todo))
    setEdit(false)
  }
  const inputRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    inputRef.current?.focus()
  },[edit])
  return (
    <form className='todos__single' onSubmit={(e)=>handelEdit(e,todo.id)}>
      
      {edit ? (<input value={editTodo} ref={inputRef}
        onChange={(e) => setEditTodo(e.target.value)} className='todos__single--text' />) :

        (todo.isDone ? (<s className="todos__single--text">{todo.todo}</s>) : (
          <span className="todos__single--text">{todo.todo}</span>
        ))}

      <div>
        <span className="icon" onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit)

          }
       

        }}>
          <AiFillEdit/>
        </span>
        <span className="icon" onClick={() => handelDelete(todo.id)}>
          <AiFillDelete/>
        </span>
        <span className="icon" onClick={()=>handelDone(todo.id)}>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo