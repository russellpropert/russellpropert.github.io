function Home() {
  const counts = React.useContext(Fred);

  return (
    <div>
      <h3>Home Component</h3>
      <p>
        Home has been displayed {counts.home !== 1 ? `${counts.home} times` : `${counts.home} time`} and&nbsp;
        {counts.all !== 1 ? `${counts.all} pages have` : `${counts.all} page has`} been displayed.
      </p>
    </div>
  );
}