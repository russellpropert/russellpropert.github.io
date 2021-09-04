function CreateAccount() {
  const [show, setShow]                   = useState(true);
  const [errorMessage, setErrorMessage]   = useState(false);
  const [firstName, setFirstName]         = useState('');
  const [lastName, setLastName]           = useState('');
  const [email, setEmail]                 = useState('');
  const [password, setPassword]           = useState('');
  const context = useContext(Context);

  function validate(field, label, errors, key) {
    if (!field) {
      errors.push({error: `${label} must be filled out.`, key})
      return false;
    }
    return true;
  }

  function clearForm() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  function handleCreate() {
    let errors = [];
    if (!validate(firstName,  'First name', errors, 'firstName'));
    if (!validate(lastName,   'Last name',  errors, 'lastName'));
    if (!validate(email,      'Email',      errors, 'email'));
    if (!validate(password,   'Password',   errors, 'password'));
    if (errors.length) {
      setErrorMessage(errors);
      setTimeout(() => setErrorMessage(false), 3000);
    } else {
      context.users.push({firstName, lastName, email, password, balance: 10000});
      console.log(context.users);
      setShow(false);
    }
  }

  return (
    <Card 
      bgColor="light"
      txtColor="dark"
      headerColor="primary"
      headerTxtColor="light"
      header="Create Account"
      errorMessage={errorMessage}
      body={show ? (
        <>
          <label>First Name</label>
          <input
            type="input"
            className="form-control"
            id="firstName"
            placeholder="Enter first name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          ></input><br/>

          <label>Last Name</label>
          <input
            type="input"
            className="form-control"
            id="lastName"
            placeholder="Enter name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          ></input><br/>

          <label>Email Address</label>
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          ></input><br/>

          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          ></input><br/>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleCreate}
          >Create Account</button>
        </>
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