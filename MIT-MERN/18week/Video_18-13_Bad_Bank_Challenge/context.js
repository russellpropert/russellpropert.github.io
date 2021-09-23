const {HashRouter, Link, Route} = ReactRouterDOM;
const {createContext, useContext, useState, useEffect} = React;

const Context = createContext(null);

let data = {
  nextUserID: 2,
  users: [
    {
      userID: 0,
      firstName: 'Tester',
      lastName: 'Lastname',
      email: 'tester@test.com',
      password: 'tester1234',
      balance: 0
    },
    {
      userID: 1,
      firstName: 'User',
      lastName: 'Lastname',
      email: 'user@test.com',
      password: 'user1234',
      balance: 0
    }
  ],
  nextTransactionID: 2,
  logs: [
    {
      transactionID: 0,
      transactionDate: '2021-09-22',
      transactionTime: '12:59:23',
      transactionType: 'Account Creation',
      userID: 0,
      amount: null,
      balance: 0
    },
    {
      transactionID: 1,
      transactionDate: '2021-09-22',
      transactionTime: '13:05:52',
      transactionType: 'Account Creation',
      userID: 1,
      amount: null,
      balance: 0
    }    
  ]
}

function validateNumber(inputValue) {
  if (!inputValue) return;
  if (isNaN(Number(inputValue))) return 'Only numbers can be endered';
  if (inputValue < 1) return 'At least one dollar needs to be entered.';
}

function createLog(context, transactionType, userID, amount, balance) {
  const dateTime = new Date();
  context.data.logs.push(
    {
      transactionID: context.data.nextTransactionID,
      transactionDate: `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`,
      transactionTime: `${`0${dateTime.getHours()}`.slice(-2)}:${`0${dateTime.getMinutes()}`.slice(-2)}:${`0${dateTime.getSeconds()}`.slice(-2)}`,
      transactionType: transactionType,
      userID: userID,
      amount: amount,
      balance: balance
    }
  );

  context.data.nextTransactionID++;
}

function Card(props) {

  function headerClasses() {
    const bg = props.headerColor ? ` bg-${props.headerColor}` : ' bg-primary';
    const txt = props.headerTxtColor ? ` text-${props.headerTxtColor}` : ' text-light';
    return `card-header${bg}${txt}`
  }

  function mainClasses() {
    const bg = props.bgColor ? ` bg-${props.bgcClor}` : ' bg-white';
    const txt = props.txtColor ? ` text-${props.txtColor}` : ' text-black';
    return `card mb-3${bg}${txt}`
  }

  return (
    <div className={mainClasses()} style={{maxWidth: "800px", margin: "40px auto 0"}}>
      <div className={headerClasses()}>{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<h5 className="card-text">{props.text}</h5>)}
        {props.body}
      </div>
    </div>
  );
}