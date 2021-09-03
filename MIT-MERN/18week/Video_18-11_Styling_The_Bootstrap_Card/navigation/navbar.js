function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Bad Bank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav flex-row flex-wrap me-auto mb-2 mb-md-0">
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link" href="#/deposit">Deposit</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link" href="#/withdraw">Withdraw</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link" href="#/balance">Balance</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link" href="#/allData">All Data</a>
            </li>
          </ul>
          <hr className="d-md-none" />
          <ul className="navbar-nav flex-row flex-wrap ms-auto mb-2 mb-md-0">
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link" href="#/createAccount">Create Account</a>
            </li>
            <li className="nav-item col-6 col-md-auto">
              <a className="nav-link" href="#/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}