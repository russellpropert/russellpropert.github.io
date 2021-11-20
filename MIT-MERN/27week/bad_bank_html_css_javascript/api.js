// Context is globally shared

const context = {
  "accounts": [
    {
      "name": "Test User",
      "email": "test@test.com",
      "balance": 0,
      "password": "secret"
    }
  ]
}

let loggedInUser = null;

const create = () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const status = document.getElementById('createStatus');

  context.accounts.push(
    {
      "name": name.value,
      "email": email.value,
      "balance": 0,
      "password": password.value
    }
  )

  name.value = '';
  email.value = '';
  password.value = '';
  status.innerHTML = 'Account created';
  setTimeout(() => {
    status.innerHTML = '';
  }, 3500);
}

const login = () => {
  const email = document.getElementById('loginEmail');
  const password = document.getElementById('loginPassword');
  const status = document.getElementById('loginStatus');

  const user = context.accounts.find(user => user.email === email.value && user.password === password.value);

  if (user) {
    loggedInUser = context.accounts.indexOf(user);
    console.log(loggedInUser);
    status.innerHTML = `${context.accounts[loggedInUser].name} is logged in.`
  } else {
    status.innerHTML = 'Invalid email or password';
    setTimeout(() => {
      status.innerHTML = '';
    }, 3500)
  }
  
  email.value = '';
  password.value = '';
}

const deposit = () => {
  const deposit = document.getElementById('deposit');
  const status = document.getElementById('depositStatus');

  switch (true) {
    case loggedInUser === null:
      status.innerHTML = 'No one is logged in';
      break;
    case deposit.value <= 0:
      status.innerHTML = 'The amount must be greater than 0';
      break;
    case Number(deposit.value) === NaN:
      status.innerHTML = 'The amount must be a numeric value';
      break;
    default:
      context.accounts[loggedInUser].balance += Number(deposit.value);
      status.innerHTML = `$${deposit.value} has been added to your account`
  }

  deposit.value = '';
}

const withdraw = () => {
  const deposit = document.getElementById('withdraw');
  const status = document.getElementById('withdrawStatus');

  switch (true) {
    case loggedInUser === null:
      status.innerHTML = 'No one is logged in';
      break;
    case context.accounts[loggedInUser].balance <= 0:
      status.innerHTML = 'You don\'t have any funds to withdraw'
      break;
    case deposit.value <= 0:
      status.innerHTML = 'The amount must be greater than 0';
      break;
    case context.accounts[loggedInUser].balance < deposit.value:
      status.innerHTML = 'You don\'t have that much money to withdraw.'
      break;
    case Number(deposit.value) === NaN:
      status.innerHTML = 'The amount must be a numeric value';
      break;
    default:
      context.accounts[loggedInUser].balance -= Number(deposit.value);
      status.innerHTML = `$${deposit.value} has been withdrawn from your account`
  }

  deposit.value = '';
}

const balance = () => {
  const status = document.getElementById('balanceStatus');
  if (loggedInUser !== null) {
    status.innerHTML = `Your account balance is $${context.accounts[loggedInUser].balance}`
  } else {
    status.innerHTML = 'No one is logged in'
  }
}

const allData = () => {
  const status = document.getElementById('allDataStatus');
  status.innerHTML = JSON.stringify(context.accounts);
}
