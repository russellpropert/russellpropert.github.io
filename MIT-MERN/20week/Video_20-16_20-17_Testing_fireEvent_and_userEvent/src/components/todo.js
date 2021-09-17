const Todo = ({todos, removeTodo}) => {
  return (
    <>
    {todos.map(
      (todo, i) => 
      <div className="todo" key={todo.id} id={i} onClick={removeTodo}>{todo.text}</div>
    )}
    </>
  );
}

export default Todo;