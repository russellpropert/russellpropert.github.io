function Form(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const context = React.useContext(UserContext);

  const background = props.bgcolor ? ` btn-${props.bgcolor}` : ' btn-primary';
  const buttonClass = `btn${background}`;
  
  function handleSubmit(e) {
    e.preventDefault();
    
    switch (props.pageName) {
      case 'CreateAccount':
        console.log(name, email, password);
        context.userData.users.push({id: context.userData.nextID, name, email, password, balance: 0});
        context.userData.nextID ++
        props.setShowForm(false)
        break;
      
      case 'Login':
        const userIndex = context.userData.users.indexOf(context.userData.users.find(user => user.email === email));
        const userPassword = userIndex >= 0 ? context.userData.users[userIndex].password : null;
        if (userPassword === password) {
          context.setCurrentUser(userIndex);
        } else {
          setErrorMessage('The email and password combination is incorrect');
          return;
        }
        break;

      case 'Deposit':
        context.userData.users[context.currentUser].balance += Number(amount);
        props.setShowForm(false)
        break;

      case 'Withdraw':
        context.userData.users[context.currentUser].balance -= Number(amount);
        props.setShowForm(false)
        break;
    }
  }

  return (
    <form>

      {
        props.formElements.includes('name') &&
        <>
          <label htmlFor="name">Name</label><br/>
          <input 
            id="name"
            type="text" 
            className="form-control" 
            value={name} 
            onChange={e => setName(e.currentTarget.value)} 
          /><br/>
        </>
      }

      {
        props.formElements.includes('email') &&
        <>
          <label htmlFor="email">Email</label><br/>
          <input 
            id="email"
            type="email" 
            className="form-control" 
            autoComplete="email"
            value={email} 
            onChange={e => setEmail(e.currentTarget.value)} 
          /><br/>

        </>
      }

      {
        props.formElements.includes('password') &&
        <>
          <label htmlFor="password">Password</label><br/>
          <input 
            id="password"
            type="password" 
            className="form-control" 
            autoComplete="current-password"
            value={password} 
            onChange={e => setPassword(e.currentTarget.value)} 
          /><br/>
        </>
      }

      {
        props.formElements.includes('amount') &&
        <>
          <label htmlFor="amount ">{props.pageName}</label><br/>
          <input 
            id="amount"
            type="number" 
            className="form-control" 
            value={amount} 
            onChange={e => setAmount(e.currentTarget.value)} 
          /><br/>
        </>
      }

      {
        props.formElements.includes('button') &&
        <>
          <button
            type="submit"
            className={buttonClass}
            onClick={handleSubmit}
          >{props.initialButtonMessage}</button>
        </>
      }

      {
        errorMessage &&
        <div style={{color: "red", marginTop: "10px"}}>{errorMessage}</div>
      }

    </form>
  );
}
