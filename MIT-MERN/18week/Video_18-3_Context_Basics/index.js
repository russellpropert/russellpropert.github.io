const {HashRouter, Link, Route}  = ReactRouterDOM;
const {createContext} = React;

const Fred = createContext(null)

const counts = {Home: 0, About: 0, Products: 0, Test1: 0, Test2: 0, All: 0};

function Spa() {
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
        <Fred.Provider value={counts}>
          <Route path="/" exact     component={Home} />
          <Route path="/about/"     component={About} />
          <Route path="/products/"  component={Products} />
          <Route path="/test1"      component={Test} />
          <Route path="/test2"      component={Testing} />
        </Fred.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById('root'));