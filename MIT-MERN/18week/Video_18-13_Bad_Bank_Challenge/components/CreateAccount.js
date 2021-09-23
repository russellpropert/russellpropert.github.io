function CreateAccount() {
  const [showForm, setShowForm]             = useState(true);
  const [errorMessages, setErrorMessages]   = useState({});
  const [email, setEmail]                   = useState('');
  const [password, setPassword]             = useState('');
  const [firstName, setFirstName]           = useState('');
  const [lastName, setLastName]             = useState('');
  const context = useContext(Context);

  let errorMessagesFromValidate = {};

  function createError(name, message) {
    errorMessagesFromValidate[name] = message;
  }

  function validate(field, name) {
    if (name === 'password' && field.length < 8) createError(name, 'Choose a password with at least 8 characters.');
    if ((name === 'firstName' || name === 'lastName') && field.length < 2) createError(name, 'Names must have at least two characters.');
    if ((name === 'firstName' || name === 'lastName') && !field.match(/^[A-Za-z\s]+$/)) createError(name, 'Names can only contain letters. Spaces are allowed.');
    if (name === 'email' && !field.match(/^.+[@]/)) createError(name, 'Please include the @ symbol.');
    if (name === 'email' && field.match(/^[@]/)) createError(name, 'Cannot begin with @.');
    if (name === 'email' && field.match(/^.+[@]$/)) createError(name, 'Please include a domain.');
    if (name === 'email' && context.data.users.find(user => user.email === field)) createError(name, 'An account with that email already exists.');
    if (!field) createError(name, 'This field cannot be blank.');

  }

  useEffect (() => {
    validate(email, 'email');
    validate(password, 'password');
    validate(firstName, 'firstName');
    validate(lastName, 'lastName');
    setErrorMessages(errorMessagesFromValidate);
  }, [email, password, firstName, lastName]);

  function handleCreate(event) {
    event.preventDefault();
    if (Object.keys(errorMessages).length) return;

    // Add user to system
    context.data.users.push(
      {
        userID: context.data.nextUserID, 
        firstName, 
        lastName, 
        email, 
        password, 
        balance: 0
      }
    );

    // Log user add
    createLog(context, 'Account Creation', context.data.nextUserID, null, 0);
    context.data.nextUserID++;
    setShowForm(false);
  }

  function clearForm() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setErrorMessages(false);
    setShowForm(true);
  }

  return (
    <Card 
      header="Create Account"
      body={showForm ? (
        <form onSubmit={handleCreate}>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            autoFocus
            // required
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
            // required
            type="password"
            name="new-password"
            id="new-password"
            value={password}
            autoComplete="new-password"
            onChange={(event) => setPassword(event.currentTarget.value)}
          ></input>
          {errorMessages.password ? <div className="error-message">{errorMessages.password}</div> : <div className="error-message">&nbsp;</div>}


          <label>First Name</label>
          <input
            className="form-control"
            // required
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          ></input>
          {errorMessages.firstName ? <div className="error-message">{errorMessages.firstName}</div> : <div className="error-message">&nbsp;</div>}

          <label>Last Name</label>
          <input
            className="form-control"
            // required
            type="text"
            name="lastName"
            id="lastName"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          ></input>
          {errorMessages.lastName ? <div className="error-message">{errorMessages.lastName}</div> : <div className="error-message">&nbsp;</div>}

          <button
            type="submit"
            className={Object.keys(errorMessages).length ? "btn btn-primary disabled" : "btn btn-primary"}
          >Create Account</button>
        </form>
      ) : (
        <>
          <h5>Success</h5>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={clearForm}
          >Add Another Account</button>
        </>
      )}
    />
  );
}