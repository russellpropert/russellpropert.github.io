const {useState, useEffect} = React;

const Square = ({id, player, newState}) => {
  const [color, setColor] = React.useState('green');
  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];

  useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting Square ${id}`);
  });

  // Keep track of the state of the Square
  return (
    <button
      onClick={e => {
        let col = getRandomColor();
        setColor(col);
        newState({id, color: col})
        e.target.style.background = col;
      }}
    >{id}</button>
  );

}

const Board = () => {
  const [player, setPlayer] = useState(1);
  const [state, setState] = useState([]);
  let status = `Player ${player}`;
  console.log(`adding state ${JSON.stringify(state)}`);

  const newState = (object) => {
    setState([...state, object]);
  }

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <button>Show/Hide Row</button>
        <button>Re-render</button>
        <h1>Player {player}'s turn</h1>
      </div>
    </div>
  );

}

ReactDOM.render(<Board />, document.getElementById('root'));