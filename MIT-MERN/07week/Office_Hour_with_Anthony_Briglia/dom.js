const list = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five'
];

let i = 0

const createList = () => {
  const listItem = document.createElement('li');
  listItem.textContent = list[i];
  document.getElementById('test').appendChild(listItem);
  //document.querySelector('#test').appendChild(listItem);// Same thing.
  i++;
  if (i < list.length) {
    setTimeout(createList, 1000);
  } else {
    i = 0;
  }
}

const trigger = document.getElementById('trigger');

trigger.addEventListener('click', () => {
  createList();
})


// for(i = 0; i < list.length; i++) {
//   const listItem = document.createElement('li');
//   listItem.textContent = list[i];
//   document.querySelector('#test').appendChild(listItem);
// }