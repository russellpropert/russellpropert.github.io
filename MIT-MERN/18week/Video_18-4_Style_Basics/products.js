function Products() {
  const counts = React.useContext(Fred);

  return (
    <div>
      <h3>Products Component</h3>
      <p>
        Products has been displayed {counts.products !== 1 ? `${counts.products} times` : `${counts.products} time`} and&nbsp;
        {counts.all !== 1 ? `${counts.all} pages have` : `${counts.all} page has`} been displayed.
      </p>
    </div>
  );
}

function Testing() {
  const counts = React.useContext(Fred);

  return (
    <div>
      <h3>Test 2 Component</h3>
      <p>
        Test 2 has been displayed {counts.test2 !== 1 ? `${counts.test2} times` : `${counts.test2} time`} and&nbsp;
        {counts.all !== 1 ? `${counts.all} pages have` : `${counts.all} page has`} been displayed.
      </p>
    </div>
  );
}