function Login() {
  const [errorMessages, setErrorMessages]   = useState({});
  const [email, setEmail]                   = useState('');
  const [password, setPassword]             = useState('');
  const context = useContext(Context);

  let isError = false;
  let errorMessagesFromValidate = {};

  function createError(name, message) {
    errorMessagesFromValidate[name] = message;
    isError = true;
  }

  function validate(field, name) {
    if (!field) createError(name, 'This field cannot be blank.');

  }

  function handleLogin(event) {
    event.preventDefault();

    validate(email, 'email');
    validate(password, 'password');
    
    if (isError) {
      setErrorMessages(errorMessagesFromValidate);
      return;
    }

    const user = context.data.users.find(user => user.email === email && user.password === password);
    context.setCurrentUser(user ? user : null);

    if (!user && !errorMessagesFromValidate.length) {
      createError('authenticationFail', 'The email or password is invalid.');
      setErrorMessages(errorMessagesFromValidate);
      return;
    }
    
    setEmail('');
    setPassword('');
    setErrorMessages(false);
  }

  return (
    <Card 
      header="Login"
      body={context.currentUser === null ? (
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            // required
            autoFocus
            type="email"
            name="email"
            id="email"
            value={email}
            autoComplete="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
          ></input>
          {errorMessages.email ? <div className="error-message">{errorMessages.email}</div> : <div className="error-message">&nbsp;</div>}


          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            // requird
            type="password"
            name="current-password"
            id="current-password"
            value={password}
            autoComplete="current-password"
            onChange={(event) => setPassword(event.currentTarget.value)}
          ></input>
          {errorMessages.password ? <div className="error-message">{errorMessages.password}</div> : <div className="error-message">&nbsp;</div>}

          <div>
            <button style={{display: "inline-block"}}
              type="submit"
              className="btn btn-primary"
            >Login</button>
            {errorMessages.authenticationFail ? <div style={{display: "inline-block", margin: "0 20px"}} className="error-message align-middle">{errorMessages.authenticationFail}</div> : <div style={{display: "inline-block"}} className="error-message">&nbsp;</div>}
          </div>
        </form>
      ) : (
          <h5>Welcome, {context.currentUser.firstName}. You are now logged in.</h5>
      )}
    />

  );
}