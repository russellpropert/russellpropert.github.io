function AllData() {
  const context = React.useContext(UserContext);

  const userData = context.userData.users.map(user =>
    <div key={user.id}>
      <h5>User: {user.name}</h5>
      <ul style={{listStyleType: "none", paddingLeft: "10px"}}>
        <li>ID: {user.id}</li>
        <li>Email: {user.email}</li>
        <li>Balance: {user.balance}</li>
      </ul>
      <br/>
    </div>
  );

  return(
    <Card
      bgcolor="info"
      txtcolor="black"
      headerText="All Data"
      body={userData}
    />
  );
}