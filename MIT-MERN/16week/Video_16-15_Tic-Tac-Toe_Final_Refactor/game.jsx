const {useState, useEffect, Fragment} = React;

const Mark = ({id, player, mark, color, newState, gameEnd}) => {
  const [status, setStatus] = useState({color: '', mark: ''});

  // Keep track of the state of the Square
  return (
    <button
      style={{color: status.color}}
      onClick={!gameEnd && status.mark === '' ? e => {
        console.log(gameEnd);
          setStatus({color, mark});
          newState({id, player});
      } : null}
    >{status.mark}</button>
  );

}

const Game = () => {
  const players = [
    {number: 0, mark: 'X', color: 'red', winner: false},
    {number: 1, mark: 'O', color: 'blue', winner: false}
  ]
  const [state, setState] = useState({squares: Array(9).fill(null), player: players[0], gameEnd: false});

  const checkWinner = (squares, player, nextPlayer) => {
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

      if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
        setState({squares, player: players[player], gameEnd: true});
        return;
      }
    }

    setState({squares, player: players[nextPlayer], gameEnd: false});
  }


  const newState = (object) => {
    const nextPlayer = (object.player + 1) % 2;
    state.squares[object.id] = object.player;
    checkWinner(state.squares, object.player, nextPlayer);
  }

  return (
    <Fragment>
      <div className="header"><h1>Tic-Tac-Toe</h1></div>
      <div className="game-board">
        {Array(9).fill(0).map((item, i) => {
          return (
            <Mark 
              key={i} 
              id={i} 
              player={state.player.number}
              mark={state.player.mark}
              color={state.player.color} 
              newState={newState}
              gameEnd={state.gameEnd}
            ></Mark>
          );
        })}
        <div className="info" id="info">
          <h1 style={{color: state.player.color}}>{!state.gameEnd ? `${state.player.mark}'s turn` : `${state.player.mark} wins!`}</h1>
        </div>
      </div>
    </Fragment>
  );

}

ReactDOM.render(<Game />, document.getElementById('root'));