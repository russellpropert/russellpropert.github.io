function Withdraw() {
  const [showForm, setShowForm] = React.useState(true);
  const context = React.useContext(UserContext);
  
  const formElements = ['amount', 'button'];
  const bgcolor = 'warning';
  const txtcolor = 'black'
  const initialButtonMessage = 'Withdraw'
  const balance = context.currentUser !== null ? context.userData.users[context.currentUser].balance : null;
  const successMessage = `Your new balance is $${balance}.`
  const successButtonText = 'Make Another Withdraw'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Withdraw"
      body={
        context.currentUser !== null ? (
        showForm ? 
          <Form 
            pageName="Withdraw"
            setShowForm={setShowForm}
            formElements={formElements}
            bgcolor={bgcolor} 
            txtcolor={txtcolor}
            initialButtonMessage={initialButtonMessage}
          /> 
        : 
          <FormMessage
            pageName="Withdraw"
            setShowForm={setShowForm}
            bgcolor={bgcolor}
            txtcolor={txtcolor}
            successMessage={successMessage}
            successButtonText={successButtonText}
          />
        )
        :
        <div>
          Please log in first.
        </div>
      }
    />  
  );
}