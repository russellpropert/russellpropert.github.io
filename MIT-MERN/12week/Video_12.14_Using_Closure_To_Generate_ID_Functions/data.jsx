const App = () => {
  const handler = (i) => {
    alert(`Button ${i + 1}`);
  }
  let a = [1, 2, 3, 4];
  let list = a.map((item, i) => <MyButton key={i} actionArgument={() => handler(i)}></MyButton>);
  console.log(list); 
  return <>{list}</>;
}

const MyButton = ({actionArgument}) => {
  let {Button} = ReactBootstrap;
  return <Button onClick={actionArgument}>Click Me</Button>
}

ReactDOM.render(<App />, document.getElementById('root'));
