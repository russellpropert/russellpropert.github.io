const ItemButtons = ({items}) => {
  const {Button} = ReactBootstrap;

  const handleClick = (e, {id}) => {
    alert(`Button: ${e.target.innerHTML} and ${id}`);
  }

  const updatedList = items.map((item, index) => {
    return (
      <Button key={index.toString()} id={index} onClick={e => handleClick(e, {id: 'some other value'})}>{item}</Button>
    );
  });

  return <ul style={{listStyleType: "none"}}>{updatedList}</ul>;
}

const items = [1, 2, 'test', 4, 5];

ReactDOM.render(
  <ItemButtons items={items} />,
  document.getElementById("root")
);
