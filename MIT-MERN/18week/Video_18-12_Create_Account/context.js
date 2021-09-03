const {HashRouter, Link, Route} = ReactRouterDOM;
const {createContext, useContext, useState} = React;

const Context = createContext(null);

let data = {
  users: [
    {
      firstName: 'Test',
      lastName: 'User',
      email: 'testuser@mail.com',
      password: 'somehash',
      balance: 10000
    }
  ]
}

function Card(props) {
  function mainClasses() {
    const bg = props.bgColor ? ` bg-${props.bgcClor}` : ' ';
    const txt = props.txtColor ? ` text-${props.txtColor}` : ' text-white';
    return `card mb-3${bg}${txt}`
  }

  function headerClasses() {
    const bg = props.headerColor ? ` bg-${props.headerColor}` : ' ';
    const txt = props.headerTxtColor ? ` text-${props.headerTxtColor}` : ' text-white';
    return `card-header${bg}${txt}`
  }

  return (
    <div className={mainClasses()} style={{maxWidth: "40rem"}}>
      <div className={headerClasses()}>{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<h5 className="card-text">{props.text}</h5>)}
        {props.body}
        {props.status && (<div id="createStatus">{props.status}</div>)}
      </div>
    </div>
  );
}