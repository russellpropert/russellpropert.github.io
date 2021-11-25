function Balance() {
  const context = React.useContext(UserContext);

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      headerText="Balance"
      status=""
      body={
        context.currentUser !== null ?
        <div>
          Your balance is ${context.userData.users[context.currentUser].balance}
        </div>
        :
        <div>
          Please log in first.
        </div>
      }
    />
  );
}