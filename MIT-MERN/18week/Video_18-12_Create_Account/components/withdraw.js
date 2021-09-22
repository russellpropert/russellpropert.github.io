function Withdraw() {
  const [showForm, setShowForm]               = useState(true);
  const [withdrawAmount, setWithdrawAmount]   = useState('');
  const [withdrawError, setWithdrawError]     = useState(false);
  const context = useContext(Context);
    
  const userIndex = context.data.users.findIndex(user => user.userID === context.currentUser.userID); 

  useEffect(() => {
    const withdrawError = context.validateNumber(withdrawAmount);
    if (withdrawError) {
      setWithdrawError(withdrawError)
      return;
    }

    if (withdrawAmount > context.data.users[userIndex].balance) {
      setWithdrawError('The amount you have entered exceeds your account balance.')
      return;
    }

    setWithdrawError(false);
  }
  , [withdrawAmount]);

  function handleWithdraw(event) {
    event.preventDefault();

    // Withdraw Money
    context.data.users[userIndex].balance -= Number(withdrawAmount);;

    // Log Withdraw
    context.createLog(context, 'Withdraw', context.currentUser.userID, withdrawAmount, context.data.users[userIndex].balance);

    setShowForm(false);
    setWithdrawAmount('');
    setWithdrawError(false);
  }

  return (
    <Card
      header="Withdraw"
      errorMessage=""
      body={showForm ? (
        <>
          <h5>Your total balance is ${context.data.users[userIndex].balance}</h5>
          {context.data.users[userIndex].balance <= 0 ?
            <h5>You do not have anything to withdraw. Please deposit money first.</h5>
          :
            <>
              <h5>Please enter an amount to withdraw from your account.</h5>
            </>
          }
          <form onSubmit={handleWithdraw}>
            <label htmlFor="WithdrawAmount">Withdraw Amount</label>
            <input
              className="form-control"
              autoFocus
              // required
              type="text"
              name="withdrawAmount"
              id="withdrawAmount"
              value={withdrawAmount}
              onChange={(event) => setWithdrawAmount(event.currentTarget.value)}
            />
            {withdrawError ? <div className='error-message'>{withdrawError}</div> : <div className='error-message'>&nbsp;</div>}
            <button
              type="submit"
              className={(!withdrawAmount || withdrawError || context.data.users[userIndex].balance <= 0) ? "btn btn-primary disabled" : "btn btn-primary"}
            >Withdraw</button>
          </form>
        </>
      ) : (
        <form onSubmit={setShowForm}>
          <h5>Your new ballance is: ${context.data.users[userIndex].balance}</h5>
          <h5>Would you like to make another Withdraw?</h5>
          <button
            type="submit"
            className="btn btn-primary"
          >Make Another Withdraw</button>
        </form>
      )}
    />
  );

}