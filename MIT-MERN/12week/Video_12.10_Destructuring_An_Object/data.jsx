const App = () => {
  //Destructuring an object
  let product = {
    name: "pear", 
    cost: 2, 
    inStock: 7
  };
  let {name, inStock} = product;
  let item = {name, inStock};
  const handler = () => alert(`name: ${item.name}\ninStock: ${item.inStock}`
  );
  return <MyButton actionArgument={handler}></MyButton>
}

// const MyButton = actionParameter => {
//   return <button onClick={actionParameter.actionArgument}>Click Me</button>
// }

const MyButton = ({actionArgument}) => {
  return <button onClick={actionArgument}>Click Me</button>
}

ReactDOM.render(<App />, document.getElementById('root'));
