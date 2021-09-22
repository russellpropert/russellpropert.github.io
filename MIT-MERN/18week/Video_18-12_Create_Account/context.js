const {HashRouter, Link, Route} = ReactRouterDOM;
const {createContext, useContext, useState} = React;

const Context = createContext(null);

let data = {
  nextUserID: 2,
  users: [
    {
      userID: 0,
      firstName: 'Tester0',
      lastName: 'Tester',
      email: 'tester0@test.com',
      password: 'test0',
      balance: 0
    },
    {
      userID: 1,
      firstName: 'Tester1',
      lastName: 'Tester',
      email: 'tester1@test.com',
      password: 'test1',
      balance: 0
    }
  ]
}

function validateNumber(inputValue) {
  if (isNaN(parseFloat(inputValue))) return 'Only numbers can be endered';
  if (inputValue < 1) return 'At least one dollar needs to be entered.';
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