import React from 'react';
import { api } from '../api';
const {useState} = React;

// Update id number if adding or subtracting default tasks in todos state in App.js
let id = 4;

const TodoForm = ({todos, setTodos}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    api.createItem(value).then((persistedItem) => {
      if (!persistedItem) return;
      const newTodos = [...todos, {id: id, text: persistedItem, isCompleted: false}];
      id++;
      setTodos(newTodos);
      setValue('');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{marginTop: "20px", color: "white"}} htmlFor="todo">Add to-do item</label>
      <input
        type="text"
        id="todo"
        className="input"
        value={value}
        placeholder="Add Todo ..."
        onChange={e => setValue(e.target.value)}
        autoFocus
      />
      <button type="submit" style={{marginTop: "20px"}}>Submit Task #{id}</button>
    </form>
  );
}

export default TodoForm;