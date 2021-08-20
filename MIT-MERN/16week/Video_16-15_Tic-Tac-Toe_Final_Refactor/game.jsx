const {useState, useEffect} = React;

const Square = ({id, player, newState}) => {
  const [status, setStatus] = useState({color: 'green', xo: ''});
  const xoArray = ['X', 'O'];
  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];

  // useEffect(() => {
  //   console.log(`Render ${id}`);
  //   return () => console.log(`unmounting Square ${id}`);
  // });

  // Keep track of the state of the Square
  return (
    <button
      style={{backgroundColor: status.color}}
      onClick={e => {
        let randomColor = getRandomColor();
        setStatus({color: randomColor, xo: xoArray[player]});
        newState({id, player})
      }}
    >{status.xo}</button>
  );

}

const Board = () => {
  const [state, setState] = useState({squares: Array(9).fill(null), player: 0});
  console.log(`adding state ${JSON.stringify(state.squares)}`);

  const checkWinner = (state) => {
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
  
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      console.log(`checkState: ${state[a]} ${state[b]} ${state[c]}`);

      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        console.log(`checkWinner: ${state[a]}`);
        return state[a];
      }
    }
  }

  console.log(checkWinner(state.squares));

  const newState = (object) => {
    const nextPlayer = (state.player + 1) % 2;
    console.log(state.squares[object.id]);
    console.log(object.player);

    state.squares[object.id] = object.player;
    setState({squares: state.squares, player: nextPlayer});
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