const Hello = (a) => {
  return (<h1>Hello {a.name} of the {a.place}.</h1>);
};
ReactDOM.render(<Hello name="Nausicaä" place="Valley of the Wind" />, document.getElementById('root'));
