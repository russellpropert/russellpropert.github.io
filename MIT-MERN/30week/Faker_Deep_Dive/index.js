import express from 'express';
import faker from 'faker';

const app = express();

app.get('/', (req, res) => {
  const name = faker.name.findName();
  const email = faker.internet.email();
  const card = faker.helpers.createCard();
  const firstName = faker.name.firstName();
  const address = faker.address.streetAddress();
  const company = faker.company.companyName();
  const catchPhrase = faker.company.catchPhrase();
  const avatar = faker.image.avatar();

  res.send(`
    <div>${name}<div><br/>
    <div>${email}<div><br/>
    <div>
      Card data: 
      ${card.name}, 
      ${card.address.city}, 
      ${card.address.state}, 
      Company: 
      ${card.company.name}
    <div><br/>
    <div>${firstName}<div>
    <div>${address}<div><br/>
    <div>${company}</div>
    <div>${catchPhrase}</div><br/>
    <img src="${avatar}"/>
    <div>${avatar}</div>
  `);  
});

const port = 3000;
app.listen(port, console.log(`Listenting on port ${port}`));
