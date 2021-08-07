// https://reactjs.org/docs/hooks-reference.html#usereducer

const reducer = (state, thingsToChange) => {
  switch (thingsToChange.type) {
    case 'increment':
      return {
        count: state.count + 1,
        color: 'green'
      };
    case 'decrement':
      return {
        count: state.count - 1,
        color: 'red'
      };
    default:
      throw new Error('reducer failed');
  }
}

const Counter = () => {
  const {useReducer} = React;
  const {Button} = ReactBootstrap;
  const initialState = {count: 0, color: 'blue'};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{padding: "10px 30px"}}>
      <div style={{marginBottom: "10px", color: state.color}}>Counting: {state.count}</div>
      <Button style={{marginRight: "10px"}} onClick={() => dispatch({type: 'decrement', color: 'red'})}>-</Button>
      <Button onClick={() => dispatch({type: 'increment', color: 'green'})}>+</Button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));