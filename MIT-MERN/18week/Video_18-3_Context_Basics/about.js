function About() {
  const counts = React.useContext(Fred);
  counts.About  += 1;
  counts.All    += 1;
  console.log(JSON.stringify(counts));

  return (
    <div>
      <h3>About Component</h3>
      <p>
        About has been displayed {counts.About !== 1 ? `${counts.About} times` : `${counts.About} time`} and&nbsp;
        {counts.All !== 1 ? `${counts.All} pages have` : `${counts.All} page has`} been displayed.
      </p>
    </div>
  );
}