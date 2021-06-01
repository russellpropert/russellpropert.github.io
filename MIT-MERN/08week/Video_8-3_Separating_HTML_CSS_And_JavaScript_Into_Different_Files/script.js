let result = 4 + 4;
console.log(result);
const par = document.createElement('p');
//const text = document.createTextNode(result);
par.textContent = result;
console.log(par);
document.getElementById('number').appendChild(par);
