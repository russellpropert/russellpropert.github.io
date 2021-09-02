function Test() {
  const counts = React.useContext(Fred);

  return (
    <div>
      <h3>Test 1 Component</h3>
      <p>
        Test 1 has been displayed {counts.test1 !== 1 ? `${counts.test1} times` : `${counts.test1} time`} and&nbsp;
        {counts.all !== 1 ? `${counts.all} pages have` : `${counts.all} page has`} been displayed.
      </p>
    </div>
  );
}