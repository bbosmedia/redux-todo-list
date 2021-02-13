import React, { useState } from 'react'
import './Input.css'


import { saveTodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'

const Input = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()
    const addTodo = e =>{
        e.preventDefault()
        dispatch(saveTodo({
            item: input,
            id: Date.now(),
            done: false
        }))
        setInput('')
    }
    return (
        <form onSubmit={addTodo} className="input">
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button type="submit" onClick={addTodo}>Add Todo</button>
        </form>
    )
}

export default Input
