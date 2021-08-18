const Square = ({i}) => {
  const {useState, useEffect} = React;
  const [colorNumber, setColor] = useState(0);

  const colors = ['#FDF','#AAA']

  useEffect(() => {
    console.log(`Render ${i}`);
    return () => console.log(`Unmount ${i}`);
  });

  return (
    <div 
      id={`square${i}`} 
      className="square" 
      style={{backgroundColor: colors[colorNumber]}}
      onClick={() => setColor((colorNumber + 1) % 2)}
    >{i}</div>
  );

}

const Board = () => {
  return (
    <div className="board">
      {Array(9).fill(0).map((item, i) => {
        i++
        return <Square key={i} i={i} />
      })}
    </div>
  );
}

ReactDOM.render(<Board />, document.getElementById('root'));