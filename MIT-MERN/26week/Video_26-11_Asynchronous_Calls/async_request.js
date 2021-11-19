import fetch from 'node-fetch';

(async function() {
  const url = 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'
  const result = await fetch(url);
  const data = await result.text();
  console.log(data);
}());