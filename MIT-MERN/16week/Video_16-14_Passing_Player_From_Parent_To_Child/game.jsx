const {useState, useEffect} = React;

const Square = ({id, player, newState}) => {
  const [status, setStatus] = useState({color: 'green', xo: ''});
  const xoArray = ['X', 'O'];
  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];

  useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting Square ${id}`);
  });

  // Keep track of the state of the Square
  return (
    <button
      style={{backgroundColor: status.color}}
      onClick={e => {
        let randomColor = getRandomColor();
        setStatus({color: randomColor, xo: xoArray[player]});
        newState({id, color: randomColor})
      }}
    >{status.xo}</button>
  );

}

const Board = () => {
  const [state, setState] = useState({clicks: [], player: 0});
  console.log(`adding state ${JSON.stringify(state.clicks)}`);

  const newState = (object) => {
    let nextPlayer = (state.player + 1) % 2;
    setState({clicks: [...state.clicks, {...object, player: state.player}], player: nextPlayer});
  }

  function renderSquare(i) {
    return <Square id={i} player={state.player} newState={newState}></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        {/* <button>Show/Hide Row</button>
        <button>Re-render</button> */}
        <h1>Player {state.player + 1}'s turn</h1>
      </div>
    </div>
  );

}

ReactDOM.render(<Board />, document.getElementById('root'));