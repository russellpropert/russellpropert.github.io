function Withdraw() {
  const [showForm, setShowForm] = React.useState({form: true, balance: null});
  const context = React.useContext(UserContext);
  
  const formElements = ['amount', 'button'];
  const bgcolor = 'warning';
  const txtcolor = 'black'
  const initialButtonMessage = 'Withdraw'
  const successMessage = `Your new balance is $${showForm.balance}.`
  const successButtonText = 'Make Another Withdraw'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Withdraw"
      body={
        context.currentUser !== null ? (
        showForm.form ? 
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