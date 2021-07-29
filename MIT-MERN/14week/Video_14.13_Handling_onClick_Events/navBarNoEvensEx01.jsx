const NavBar = ({menuItems}) => {
  const {Button} = ReactBootstrap;

  const handleClick = (e) => {
    alert('Button: ' + e.target.innerHTML);
  }

  const updatedList = menuItems.map((listItems, index) => {
    // for the 'no evens' exercise
    //if (listItems % 2 === 1) {
      return (
        <Button 
          key={index.toString()}
          onClick={handleClick}
        >{listItems}</Button>
      );
    //}
  });

  return <ul style={{listStyleType: "none"}}>{updatedList}</ul>;
}

const menuItems = [1, 2, 'test', 4, 5];

ReactDOM.render(
  <NavBar menuItems={menuItems} />,
  document.getElementById("root")
);
