const ATMDeposit = ({onChange}) => {
  return (
    <label>
      Deposit:&nbsp;
      <input type="number" id="deposit" onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
}

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  let depositAmount = 0;
  const handleChange = event => {
    depositAmount = Number(event.target.value);
    console.log(`handleChange ${depositAmount}`);
  }

  const handleSubmit = () => {
    const total = accountState + depositAmount;
    alert(`Account total = ${total}`);
    setAccountState(total);
    document.getElementById('deposit').value = 0;
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance ${accountState}</h2>
      <ATMDeposit onChange={handleChange}></ATMDeposit>
    </form>
  );
}

ReactDOM.render(<Account />, document.getElementById('root'));
