function Home() {
  return (
    <Card 
      bgColor="light"
      txtColor="dark"
      headerColor="primary"
      headerTxtColor="light"
      header="Bad Bank"
      title="Welcome to the bank."
      text="This is a card for the home page of this bank demo."
      body={<img src="bank.png" className="img-fluid mx-auto d-block" alt="bank image" style={{margin: '40px'}} />}
    />
  );
}


