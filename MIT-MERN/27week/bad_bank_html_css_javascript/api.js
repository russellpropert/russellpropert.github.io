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

const create = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  context.accounts.push(
    {
      "name": name,
      "email": email,
      "balance": 0,
      "password": password
    }
  )
}