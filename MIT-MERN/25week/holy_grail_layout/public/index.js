function PlusMinus(props) {
  function runHandle(value) {
    props.handle({section: props.section, value});
  }
  
  return (
    <>
      <img src={`icons/${props.section}_plus.png`} alt="Plus button" onClick={() => runHandle(1)} />
      <img src={`icons/${props.section}_minus.png`} alt="Minus button" onClick={() => runHandle(-1)} />
    </>
  );
}

function Data(props) {
  
  return (
    props.section === 'header' || props.section === 'footer' ?
      <div>
        Header: {props.data.header}, 
        Left: {props.data.left}, 
        Article: {props.data.article}, 
        Right: {props.data.right}, 
        Footer: {props.data.footer}
      </div>
    :
      <div>
        Header: {props.data.header}<br/>
        Left: {props.data.left}<br/>
        Article: {props.data.article}<br/>
        Right: {props.data.right}<br/>
        Footer: {props.data.footer}
      </div>
  );
}

function read() {
  return new Promise((resolve, reject) => {
    const url = '/data';
    superagent
      .get(url)
      .end((err, res) => {
        err ? reject(null) : resolve(res.body);
      });
  });
}

function update(section, value) {
  return new Promise((resolve, reject) => {
    const url = `/update/${section}/${value}`;
    superagent
      .post(url)
      .end((err, res) => {
        err ? reject(null) : resolve(res.body);
      });
  });
}

function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    // read database data and update UI
    read().then(res => {setData(res)});
  }, [])

  function handle(change) {
    // update database and local state
    console.log(change.section, change.value);
    update(change.section, change.value).then(res => (setData(res)));
  }

  return (
    <div className="grid">
      <Header handle={handle} data={data}/>
      <Left handle={handle} data={data}/>
      <Article handle={handle} data={data}/>
      <Right handle={handle} data={data}/>
      <Footer handle={handle} data={data}/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));