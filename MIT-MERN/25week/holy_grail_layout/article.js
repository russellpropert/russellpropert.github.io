function Article(props) {
  return (
    <>
      <article>
        <PlusMinus section="article" handle={props.handle}/>
        <div className="section">Article:{props.data.article}</div>
        <Data section="article" data={props.data}/>
      </article>
    </>
  );
}