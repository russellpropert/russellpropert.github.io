function Home() {
  return (
    <Card 
      bgColor="light"
      txtColor="dark"
      headerColor="primary"
      headerTxtColor="light"
      header="Create Account"
      title="Welcome to the bank."
      text="This is a card for the home page of this bank demo."
      body={<img src="bank.png" className="img-fluid" alt="bank image" />}
    />
  );
}


