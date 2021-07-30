const NavBar = ({listItems}) => {
  const {Button} = ReactBootstrap;
  const [record, setRecord] = React.useState([]);

  const handleClick = (e) => {
    record.push(`The ${e.target.innerHTML} was clicked at ${new Date().toLocaleTimeString()}`);
    setRecord(record);
    alert(`Button: ${e.target.innerHTML}`);
    console.log(record);
  }

  const buttons = listItems.map((item, index) => {
    return <Button key={index} onClick={handleClick}>{item}</Button>
  });

  return <ul>{buttons}</ul>

}

const listItems = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NavBar listItems={listItems} />,
  document.getElementById('root')
);