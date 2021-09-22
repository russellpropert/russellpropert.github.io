function AllData() {

  const context = useContext(Context);

  return (
    <Card
      header="All Data"
      body={context.data.users.map(user => 
        <div key={user.userID}>
          <h5>User ID: {user.userID}</h5>
          <ul style={{listStyleType: "none", paddingLeft: "10px"}}>
            <li>First Name: {user.firstName}</li>
            <li>Last Name: {user.lastName}</li>
            <li>Email Address: {user.email}</li>
            <li>Password: {user.password}</li>
            <li>Balance: ${user.balance}</li>
          </ul>
        </div>
      )}
    />
  );
}