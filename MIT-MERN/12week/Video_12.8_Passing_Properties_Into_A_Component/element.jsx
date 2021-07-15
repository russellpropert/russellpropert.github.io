const Hello = (a) => {
  let color = a.action();
  return (<h1 style={{backgroundColor: color}}>Hello {a.name} of the {a.place}.</h1>);
};

const getRandomColor = () => {
  const palet = ["red", "purple", "blue"];
  let color = palet[Math.floor(Math.random() * 3)];
  console.log(color);
  return color;
}

ReactDOM.render(
  <Hello name="Nausicaä" place="Valley of the Wind" action={getRandomColor}/>, 
  document.getElementById('root')
);
