function init(initialCount) {
  return {count: Number(initialCount)};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error('The reducer function failed to run.');
  }
}

function Counter({initialCount}) {
  const {useReducer} = React;
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div style={{margin: "10px"}}>
      <div style={{marginBottom: "10px"}}>Count: {state.count}</div>
      <button style={{marginRight: "5px"}}
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button style={{marginRight: "5px"}} onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

ReactDOM.render(<Counter initialCount="1"></Counter>, document.getElementById('root'));