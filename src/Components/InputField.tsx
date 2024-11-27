import React, { useRef } from 'react'
import "./style.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handelAdd: (e: React.FormEvent)=>void
}


const InputField: React.FC<Props> = ({ todo, setTodo, handelAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
      <>
          <form className="input" onSubmit={(e) => {
                  handelAdd(e)
                  inputRef.current?.blur()
              }}>
              <input type='input' placeholder='Enter the Task'
                  ref={inputRef}
                className='input__box '
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
              <button className='input_submit' type='submit'>Go</button>
          </form>
      </>
  )
}

export default InputField