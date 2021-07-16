const App = () => {
  const handler = (event) => {
    console.log(event.target);
    alert(`Button id: "${event.target.getAttribute('id')}"\nAttribute Names: ${event.target.getAttributeNames()}`);
  }
  let a = [1, 2, 3, 4];
  let list = a.map((item, i) => <MyButton i={i} key={i} actionArgument={handler}></MyButton>);
  console.log(list); 
  return <>{list}</>;
}

const MyButton = ({actionArgument, i}) => {
  let {Button} = ReactBootstrap;
  let id = `button${i}`;
  return <Button id={id} onClick={actionArgument}>Click Me</Button>
}

ReactDOM.render(<App />, document.getElementById('root'));
