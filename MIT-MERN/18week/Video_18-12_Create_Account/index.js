function Spa() {

  const [currentUser, setCurrentUser] = useState(
  {
    userID: 0,
    firstName: 'Tester',
    lastName: 'Lastname',
    email: 'tester@test.com',
    password: 'test1234',
    balance: 0
  });

  console.log(data.logs);

  return (
    <div className="container" style={{maxWidth: "800px"}}>
      <HashRouter>
        <Context.Provider value={{data, currentUser, setCurrentUser, validateNumber, createLog}}>
          <NavBar />
          <Route path="/" exact         component={Home} />
          {currentUser !== null ?
          <Route path="/CreateAccount"  component={PageNotAvailable} /> :
          <Route path="/CreateAccount"  component={CreateAccount} />
          }
          {currentUser !== null ?
            <Route path="/Deposit"      component={Deposit} /> :
            <Route path="/Deposit"      component={PageNotAvailable} />
          }
          {currentUser !== null ? 
            <Route path="/Withdraw"     component={Withdraw} /> : 
            <Route path="/Withdraw"     component={PageNotAvailable} />
          }
          {currentUser !== null ? 
          <Route path="/AllData"        component={AllData} /> :
          <Route path="/AllData"        component={PageNotAvailable} />
          }
          <Route path="/Login"          component={Login} />
        </Context.Provider>
      </HashRouter>
    </div>
  );
}

ReactDOM.render(<Spa />, document.getElementById('root'));