const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;

const UserContext = React.createContext(null);

const userData = {
  nextID: 2,
  users:[
    {
      id: 1,
      name: 'Test User', 
      email: 'test@test.com', 
      password: 'test1234',
      balance: 100
    }
  ]
}

function Spa() {
  const [currentUser, setCurrentUser] = React.useState(null);
  console.log('Current User: ' + currentUser)

  return (
    <HashRouter>
      <div>
        <Navbar/>
        <UserContext.Provider value={{userData, currentUser, setCurrentUser}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/createAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/allData/" component={AllData} />
        </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa/>, document.getElementById('root'));
