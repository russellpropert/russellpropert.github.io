function Test() {
  const counts = React.useContext(Fred);
  counts.Test1  += 1;
  counts.All    += 1;
  console.log(JSON.stringify(counts));

  return (
    <div>
      <h3>Test1 Component</h3>
      <p>
        Test 1 has been displayed {counts.Test1 !== 1 ? `${counts.Test1} times` : `${counts.Test1} time`} and&nbsp;
        {counts.All !== 1 ? `${counts.All} pages have` : `${counts.All} page has`} been displayed.
      </p>
    </div>
  );
}