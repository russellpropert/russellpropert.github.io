function Spa() {
  const {HashRouter, Link, Route}  = ReactRouterDOM;

  return (
    <HashRouter>
      <div>
        <h1>Routing – Hello World</h1>
        <Link to="/">Home</Link> --
        <Link to="/about/">About</Link> --
        <Link to="/products">Products</Link> --
        <Link to="/test1">Test 1</Link>--
        <Link to="/test2">Test 2</Link>
        <hr />
        <Route path="/" exact     component={Home} />
        <Route path="/about/"     component={About} />
        <Route path="/products/"  component={Products} />
        <Route path="/test1"      component={Test} />
        <Route path="/test2"      component={Testing} />
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById('root'));