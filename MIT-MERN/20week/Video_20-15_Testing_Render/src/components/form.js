import React from 'react';
const {useState} = React;

const TodoForm = ({todos, setTodos}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text: value, isCompleted: false}];
    setTodos(newTodos);
    setValue('');
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
      <button type="submit" style={{marginTop: "20px"}}>Submit</button>
    </form>
  );
}

export default TodoForm;