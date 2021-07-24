const SignUp = () => {  
  const [values, handleChange] = useForm(
    {
      year: '',
      name: '',
      email: '',
      password: '',
      remember: false
    }
  );

  const year = values.year;
  const name = values.name;
  const email = values.email;
  const password = values.password;
  const remember = values.remember;
  const rememberResult = values.remember ? 'Yes' : 'No'; 

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
      <select name="year" value={year} onChange={handleChange}>
        <option hidden>-- Select Year --</option>
        <option>Freshman</option>
        <option>Sophmore</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
      <div>Name</div>
      <input name="name" value={name} type="text" onChange={handleChange} />
      <div>Email</div>
      <input name="email" value={email} type="text" onChange={handleChange} />
      <div>Password</div>
      <input name="password" value={password} type="text" onChange={handleChange} />
      <div><input name="remember" value={remember} type="checkbox" onChange={handleChange} /> Remember me</div>
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
