import React,{useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import './App.css';
import { Todo } from './todo.model';


const App:React.FC = () => {
  const [todos,setTodos] = useState<Todo[]>([
    { id: '1', text: "Finish the course" },
    { id: '2', text: "Finish the bundle" },
])

const addTodoHandler = (todo:string) => {
  const newTodo = {text:todo,id:`${todos.length+1}`}
  console.log(newTodo);
setTodos([...todos,newTodo])
}

const todoDeleteHandler = (id:string) => {
  setTodos(todos.filter(todo=>todo.id!==id))
}
  return (
    <div className='App'>
      <NewTodo addTodo={addTodoHandler}/>
      <TodoList items={todos} handleClick={todoDeleteHandler}/>
      </div>
  )
}

export default App;
