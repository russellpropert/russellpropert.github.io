function Spa() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="container">
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