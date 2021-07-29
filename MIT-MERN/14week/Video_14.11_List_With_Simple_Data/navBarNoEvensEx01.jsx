const NavBar = ({menuItems}) => {
  const {Button} = ReactBootstrap;
  const updatedList = menuItems.map((listItems, index) => {
    if (listItems % 2 === 1) {
      return <Button key={index.toString()}>{listItems}</Button>;
    }
  });
  return <ul style={{listStyleType: "none"}}>{updatedList}</ul>
}

const menuItems = [1, 2, 3, , 4, 5];

ReactDOM.render(
  <NavBar menuItems={menuItems} />,
  document.getElementById("root")
);
