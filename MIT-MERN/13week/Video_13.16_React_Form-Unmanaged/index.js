let results = 'None';

const handle = (event) => {
  let year = document.getElementById('year').value;
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let checked = document.getElementById('checkbox').checked ? 'Checked' : 'Not checked';

  results = 
    <>
      <div>{year}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{password}</div>
      <div>{checked}</div>
    </>

  ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
  );
}

const SignUp = () => {  
  return (
    <>
      <select id="year">
        <option>Freshman</option>
        <option>Sophmore</option>
        <option>Junior</option>
        <option>Senior</option>
      </select>
      <div>Name</div>
      <input id="name" type="text" />
      <div>Email</div>
      <input id="email" type="text" />
      <div>Password</div>
      <input id="password" type="text" />
      <div><input id="checkbox" type="checkbox" /> Remember me</div>
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
