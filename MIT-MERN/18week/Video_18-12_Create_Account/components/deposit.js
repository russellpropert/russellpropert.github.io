function Deposit() {
  const [showForm, setShowForm]             = useState(true);
  const [depositAmount, setDepositAmount]   = useState(0);
  const [depositError, setDepositError]     = useState(false);
  const context = useContext(Context);

  const userIndex = context.data.users.findIndex(user => user.userID === context.currentUser.userID);

  function handleDeposit(event) {
    event.preventDefault();
    const depositError = context.validateNumber(depositAmount);
    if (depositError) {
      setDepositError(depositError)
      return;
    }

    context.data.users[userIndex].balance += Number(depositAmount);;
    setShowForm(false);
    setDepositAmount(0);
  }

  return (
    <Card
      header="Deposit"
      errorMessage=""
      body={showForm ? (
        <>
        <h5>Your total balance is ${context.data.users[userIndex].balance}</h5>
        <h5>Please enter an amount to deposit into your account.</h5>
        <form onSubmit={handleDeposit}>
          <label htmlFor="depositAmount">Deposit Amount</label>
          <input
            className="form-control"
            autoFocus
            // required
            type="number"
            name="depositAmount"
            id="depositAmount"
            value={depositAmount}
            onChange={(event) => setDepositAmount(event.currentTarget.value)}
          />
          {depositError ? <div className='error-message margin-bottom'>{depositError}</div> : <div className='error-message margin-bottom'>&nbsp;</div>}
          <button
            type="submit"
            className="btn btn-primary"
          >Deposit</button>
        </form>
        </>
      ) : (
        <>
          <h5>Your new ballance is: ${context.data.users[userIndex].balance}</h5>
          <h5>Would you like to make another deposit?</h5>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={setShowForm}
          >Make Another Deposit</button>
        </>
      )}
    />
  );
}