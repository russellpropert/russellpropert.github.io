function Deposit() {
  const [showForm, setShowForm] = React.useState({form: true, balance: null});
  const context = React.useContext(UserContext);

  const formElements = ['amount', 'button'];
  const bgcolor = 'success';
  const txtcolor = 'white'
  const initialButtonMessage = 'Deposit'
  const successMessage = `Your new balance is $${showForm.balance}.`
  const successButtonText = 'Make Another Deposit'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Deposit"
      body={
        context.currentUser !== null ? (
        showForm.form ? 
          <Form 
            pageName="Deposit"
            setShowForm={setShowForm}
            formElements={formElements}
            bgcolor={bgcolor} 
            txtcolor={txtcolor}
            initialButtonMessage={initialButtonMessage}
          /> 
        : 
          <FormMessage
            pageName="Deposit"
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