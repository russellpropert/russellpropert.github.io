function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element. 
  const item = document.getElementById('myInput').value;
  //Step 2: Create a text node containing that value
  if (item) {
    const itemTextNode = document.createTextNode(item);
  //Step 3: Create a new li element and append the text node to it
    const listItem = document.createElement("li");
    listItem.appendChild(itemTextNode);
    console.log(listItem);
  //Step 4: Append the li element to the existing myTODOs element.
    document.getElementById('myTODOs').appendChild(listItem);
  } else {
    alert('You must enter a value in the text box in order to add to the list.')
  }
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = addItem;
}
