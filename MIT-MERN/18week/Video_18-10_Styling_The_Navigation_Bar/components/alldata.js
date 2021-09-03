function AllData() {
  const data = useContext(Context);
  return (
    <>
      <h1>All Data Component</h1>
      <h3>{JSON.stringify(data.users[0])}</h3>
    </>
  );
}