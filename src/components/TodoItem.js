import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { useDispatch } from 'react-redux';
import { setCheck, deleteTodoItem } from '../features/todoSlice'

function TodoItem({item, id, done, todoChange}) {
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(setCheck(id))
    }

    const deleteTodo = () => {
        dispatch(deleteTodoItem(id))
    }

    return (
        <div className={`todoItem ${done && 'done'}`}>
             <Checkbox
                color="primary"
                checked={done}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <p>{item}</p>
            <EditRoundedIcon onClick={() => todoChange(id)} className="icon" />
            <HighlightOffIcon onClick={deleteTodo} className="icon todoItem__icon" />
        </div>
    )
}

export default TodoItem
