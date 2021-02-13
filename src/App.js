import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { selectTodolist } from './features/todoSlice';



const todoChange = (id) => {
  console.log(id)
}

function App() {
  const todos = useSelector(selectTodolist)
  return (
    <div className="App">
      <div className="appContainer">
      <Input />
        <div className="appTodoContainer">
          {todos.map(item => (
            <TodoItem key={item.id} todoChange={todoChange} item={item.item} id={item.id} done={item.done} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
