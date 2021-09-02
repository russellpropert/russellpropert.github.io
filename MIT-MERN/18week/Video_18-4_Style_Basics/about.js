function About() {
  const counts = React.useContext(Fred);

  return (
    <div>
      <h3>About Component</h3>
      <p>
        About has been displayed {counts.about !== 1 ? `${counts.about} times` : `${counts.about} time`} and&nbsp;
        {counts.all !== 1 ? `${counts.all} pages have` : `${counts.all} page has`} been displayed.
      </p>
    </div>
  );
}