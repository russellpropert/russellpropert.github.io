function Deposit() {
  const data = useContext(Context);
  return (
    <>
      <h1>Deposit Component</h1>
      <h3>{JSON.stringify(data.users[0])}</h3>
    </>  
  );
}