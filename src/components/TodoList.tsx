import React from 'react';
import './TodoList.css';

interface TodoListProps{
    items:{id:string,text:string}[];
    handleClick:(id:string)=>void
}

const TodoList: React.FC<TodoListProps> = ({items,handleClick}) => {
 
    return (
        <ul>
            {items.map((todo:any) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={handleClick.bind(null,todo.id)}>Delete</button>
                    </li>

            ))}
        </ul>
    );
}

export default TodoList;