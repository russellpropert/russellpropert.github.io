const App = () => {
  const handler = () => alert('Hello World!');
  let a = [1, 2, 3, 4];
  let list = a.map((item, i) => <MyButton key={i} actionArgument={handler}></MyButton>);
  console.log(list); 
  return <>{list}</>;
}

const MyButton = ({actionArgument}) => {
  let {Button} = ReactBootstrap;
  return <Button onClick={actionArgument}>Click Me</Button>
}

ReactDOM.render(<App />, document.getElementById('root'));
