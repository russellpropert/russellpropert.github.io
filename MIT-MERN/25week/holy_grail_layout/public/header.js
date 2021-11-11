function Header(props) {
  return (
    <>
      <header>
        <PlusMinus section="header" handle={props.handle}/>
        <div className="section">Header:{props.data.header}</div>
        <Data section="header" data={props.data}/>
      </header>
    </>
  );
}