function Right(props) {
  return (
    <>
      <aside>
        <PlusMinus section="right" handle={props.handle}/>
        <div className="section">Right:{props.data.right}</div>
        <Data section="right" data={props.data}/>
      </aside>
    </>
  );
}