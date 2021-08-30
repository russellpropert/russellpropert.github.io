function Products() {
  const counts = React.useContext(Fred);
  counts.Products  += 1;
  counts.All       += 1;
  console.log(JSON.stringify(counts));

  return (
    <div>
      <h3>Products Component</h3>
      <p>
        Products has been displayed {counts.Products !== 1 ? `${counts.Products} times` : `${counts.Products} time`} and&nbsp;
        {counts.All !== 1 ? `${counts.All} pages have` : `${counts.All} page has`} been displayed.
      </p>
    </div>
  );
}

function Testing() {
  const counts = React.useContext(Fred);
  counts.Test2  += 1;
  counts.All    += 1;
  console.log(JSON.stringify(counts));

  return (
    <div>
      <h3>Test 2 Component</h3>
      <p>
        Test 2 has been displayed {counts.Test2 !== 1 ? `${counts.Test2} times` : `${counts.Test2} time`} and&nbsp;
        {counts.All !== 1 ? `${counts.All} pages have` : `${counts.All} page has`} been displayed.
      </p>
    </div>
  );
}