const {HashRouter, Link, Route}  = ReactRouterDOM;
const {createContext, useState, useContext} = React;

const Fred = createContext(null)

const counts = {home: 0, about: 0, products: 0, test1: 0, test2: 0, all: 0};

function getTab() {
  let tab = location.hash.substring(2);
  if (tab === '') return 'home';
  return tab;
}

function Spa() {
  console.log('Spa: render')
  return (
    <HashRouter>
      <div className="container">
        <Fred.Provider value={counts}>
          <h1 style={{textAlign: "center"}}>Routing – Hello World</h1>
          <Nav getTab={getTab} />
          <hr />
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