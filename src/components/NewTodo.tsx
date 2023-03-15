import React, { useRef } from 'react'
import './NewTodo.css';

type NewTodoProps = {
    addTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({addTodo}) => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const text = textInputRef.current!.value
        if (!text) return
        addTodo(text)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor='todo-text'>Todo Text</label>
                <br />
                <input type="text" id='todo-text' ref={textInputRef} />
            </div>
            <button type='submit'>Add</button>
        </form>
    );
}

export default NewTodo;