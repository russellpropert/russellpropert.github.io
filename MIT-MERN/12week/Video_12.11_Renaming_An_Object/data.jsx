const App = () => {
  const handler = () => alert('Hello World!');
  return <MyButton actionArgument={handler}></MyButton>
}

// const MyButton = ({actionArgument}) => {
//   let {Button} = ReactBootstrap;
//   return <Button onClick={actionArgument}>Click Me</Button>
// }

// Renaming a destructured property {Button : Abutton}
const MyButton = ({actionArgument}) => {
  let {Button : Abutton} = ReactBootstrap;
  return <Abutton onClick={actionArgument}>Click Me</Abutton>
}

ReactDOM.render(<App />, document.getElementById('root'));
