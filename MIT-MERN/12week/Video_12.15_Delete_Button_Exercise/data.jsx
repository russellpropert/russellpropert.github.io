const App = () => {
  const {useState} = React;
  let [state, setState] = useState([1, 2, 3, 4]);
  const handler = (i) => {
    state = state.filter(button => button !== i);
    setState(state);
    console.log(state);
  }
  let list = state.map((item) => <MyButton key={item} actionArgument={() => handler(item)}></MyButton>);
  console.log(list); 
  return <>{list}</>;
}

const MyButton = ({actionArgument}) => {
  let {Button} = ReactBootstrap;
  return <Button onClick={actionArgument}>Click Button</Button>
}

ReactDOM.render(<App />, document.getElementById('root'));
