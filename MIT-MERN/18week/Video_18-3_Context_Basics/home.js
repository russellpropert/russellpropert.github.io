function Home() {
  const counts = React.useContext(Fred);
  counts.Home  += 1;
  counts.All   += 1;
  console.log(JSON.stringify(counts));

  return (
    <div>
      <h3>Home Component</h3>
      <p>
        Home has been displayed {counts.Home !== 1 ? `${counts.Home} times` : `${counts.Home} time`} and&nbsp;
        {counts.All !== 1 ? `${counts.All} pages have` : `${counts.All} page has`} been displayed.
      </p>
    </div>
  );
}