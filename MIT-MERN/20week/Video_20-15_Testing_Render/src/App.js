// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Todo from './components/todo.js'
import TodoForm from './components/form.js'
const {useState} = React;

const App = () => {
  const [todos, setTodos] = useState(
    [
      {
        text: 'learn react',
        isCompleted: false,
      },
      {
        text: 'watch olympic recaps',
        isCompleted: false,
      },
      {
        text: 'build todo app',
        isCompleted: false,
      },
    ]
  );

  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1)
    setTodos(temp);
  }

  return (
    <div className="to-do-card">
      <h1>To-do List</h1>
      <p>Enter a new list item below. Click on a list item to delete it.</p>
      <div className="app">
        <div>
          <Todo todos={todos} removeTodo={removeTodo} />
        </div>
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
