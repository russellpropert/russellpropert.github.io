function CreateAccount() {
  const [show, setShow]             = useState(true);
  const [status, setStatus]         = useState('');
  const [firstName, setFirstName]   = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const context = useContext(Context);

  function validate(field, label) {
    if (!field) {
      setStatus(`Error: ${label}`);
      setTimeout(() => setStatus(''), 3000);
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
    console.log(firstName, lastName, email, password);
    if (!validate(firstName,  'first name'))   return;
    if (!validate(lastName,   'last name'))   return;
    if (!validate(email,      'email'))       return;
    if (!validate(password,   'password'))    return;
    context.users.push({firstName, lastName, email, password, balance: 10000});
    console.log(context.users);
    setShow(false);
  }

  return (
    <Card 
      bgColor="light"
      txtColor="dark"
      headerColor="primary"
      headerTxtColor="light"
      header="Bad Bank Landing Page"
      status={status}
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