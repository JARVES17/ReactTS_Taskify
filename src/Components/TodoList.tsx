import { Todo } from "./model"
import SingleTodo from "./SingleTodo"
import "./style.css"

interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
      <div className={todos.length!==0?"todos":"NoClass"}>
          {todos.map(((todo) => <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
          ))}
    </div>
  )
}

export default TodoList