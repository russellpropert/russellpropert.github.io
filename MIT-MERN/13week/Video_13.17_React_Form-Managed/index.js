const SignUp = () => {  
  const [year, setYear] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);

  const rememberResult = remember ? 'Yes' : 'No'; 

  const handle = () => {
    console.log('Year: ', year);
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Password: ', password);
    console.log(rememberResult);
  }

  const results =
    <>
      <div>Year: {year}</div>
      <div>Name: {name}</div>
      <div>E-mail: {email}</div>
      <div>Password: {password}</div>
      <div>Remember me: {rememberResult}</div>
    </>;

  return (
    <>
      <select value={year} onChange={event => setYear(event.target.value)}>
        <option hidden>-- Select Year --</option>
        <option>Freshman</option>
        <option>Sophmore</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
      <div>Name</div>
      <input type="text" onChange={event => setName(event.target.value)} />
      <div>Email</div>
      <input type="text" onChange={event => setEmail(event.target.value)} />
      <div>Password</div>
      <input type="text" onChange={event => setPassword(event.target.value)} />
      <div><input type="checkbox" onChange={event => setRemember(event.target.checked)} /> Remember me</div>
      <button onClick={handle}>Submit</button>
      <div>Results:</div>
      <>{results}</>
    </>
  )
}

ReactDOM.render(
  <SignUp/>,
  document.getElementById('root')
);
