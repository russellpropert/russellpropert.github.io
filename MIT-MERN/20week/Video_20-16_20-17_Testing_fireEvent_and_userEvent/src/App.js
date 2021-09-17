// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Todo from './components/todo.js'
import TodoForm from './components/form.js'
const {useState} = React;

const App = () => {
  // Update id variable in forms.js if adding or subtracting default tasks.
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: 'learn react',
        isCompleted: false,
      },
      {
        id: 2,
        text: 'watch olympic recaps',
        isCompleted: false,
      },
      {
        id: 3,
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
      <hr />
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
