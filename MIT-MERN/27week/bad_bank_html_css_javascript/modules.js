const ui = {};
const navigation = document.getElementById('navigation');
const target     = document.getElementById('target');


ui.navigation = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" onclick="loadDefault()">Bad Bank</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadLogin()">Login</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadAllData()">All Data</a>
        </li>

      </ul>
    </div>
  </nav>
`;

navigation.innerHTML += ui.navigation;

ui.default = `
  <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-primary">Bad Bank Landing Page</div>
    <div class="card-body">
      <h5 class="card-title">Welcome to the bank<h5>
      <p style="font-size: 1rem; font-weight: normal;">You can move around using the navigation bar.</p>
      <img src="./bank.png" width="100%" />
    </div>
  </div>
`;

const loadDefault = () => {
  target.innerHTML = ui.default;
}

ui.createAccount = `
  <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-secondary">Create Account</div>
    <div class="card-body text-black bg-light">
      <label for="name">Name</label>
      <input type="text" id="name" class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" class="form-control">
      <label for="name">Password</label>
      <input type="password" id="password" class="form-control">
      <button type="submit" id="submit" class="btn btn-secondary" onclick="create()">Create Account</button>
      <div id="createStatus"></div>
    </div>
  </div>
`;

const loadCreateAccount = () => {
  target.innerHTML = ui.createAccount;
}

ui.login = `
  <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-danger">Login</div>
    <div class="card-body text-black bg-white">
      <label for="email">Email</label>
      <input type="email" id="loginEmail" class="form-control">
      <label for="name">Password</label>
      <input type="password" id="loginPassword" class="form-control">
      <button type="submit" id="submit" class="btn btn-danger" onclick="login()">Login</button>
      <div id="loginStatus"></div>
    </div>
  </div>
`;

const loadLogin = () => {
  target.innerHTML = ui.login;
}

ui.deposit = `
  <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-success">Deposit</div>
    <div class="card-body text-black bg-white">
      <label for="deposit">Deposit</label>
      <input type="number" id="deposit" class="form-control">
      <button type="submit" id="submit" class="btn btn-success" onclick="deposit()">Deposit</button>
      <div id="depositStatus"></div>
    </div>
  </div>
`;

const loadDeposit = () => {
  target.innerHTML = ui.deposit;
}

ui.withdraw = `
  <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header text-black bg-warning">Withdraw</div>
    <div class="card-body text-black bg-white">
      <label for="withdraw">Withdraw</label>
      <input type="number" id="withdraw" class="form-control">
      <button type="submit" id="submit" class="btn btn-warning" onclick="withdraw()">Withdraw</button>
      <div id="withdrawStatus"></div>
    </div>
  </div>
`;

const loadWithdraw = () => {
  target.innerHTML = ui.withdraw;
}

ui.balance = `
  <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-dark">Balance</div>
    <div class="card-body text-black bg-white">
      <button type="submit" id="submit" class="btn btn-dark" onclick="balance()">Show Balance</button>
      <div id="balanceStatus"></div>
    </div>
  </div>
`;

const loadBalance = () => {
  target.innerHTML = ui.balance;
}

ui.allData = `
  <div class="card mb-3">
    <div class="card-header text-black bg-info">All Data</div>
    <div class="card-body text-black bg-white">
      <h5 class="card-title">All Data test<h5>
      <button type="submit" id="submit" class="btn btn-info" onclick="allData()">Show All Data</button>
      <div id="allDataStatus"></div>
    </div>
  </div>
`;

const loadAllData = () => {
  target.innerHTML = ui.allData;
}

loadDefault();