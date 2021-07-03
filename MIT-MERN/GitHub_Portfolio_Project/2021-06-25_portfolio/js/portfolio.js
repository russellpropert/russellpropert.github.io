const cardGrid = () => {
  //Get all grids on page.
  const grids = document.getElementsByClassName('code-grid');

  //Iterate through grids.
  for (let i = 0; i < grids.length; i++) {
    const cards = grids.item(i).getElementsByClassName('card');
    const rows = Math.ceil(cards.length / 2);
    const oddCard = cards.length % 2;
    //Set number of rows
    grids.item(i).style.gridTemplateRows = `repeat(${rows}, auto)`;
    
    //Spans an odd card at the bottom across two frames.
    if (oddCard === 1) {
      const last = cards.length - 1;
      cards.item(last).style.gridColumn = '1 / span 2';
    }
  } 
}

const includeHTML = () => {
  let element, file, xhttp;
  let elementList = document.getElementsByTagName('*');
  console.log(elementList);
  for (let i = 0; i < elementList.length; i++) {
    element = elementList[i];
    file = element.getAttribute('include-html');
    if (file) {
      xhttp = new XMLHttpRequest();
      console.log(xhttp);
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {element.innerHTML = this.responseText;}
          if (this.status == 404) {element.innerHTML = 'Page not found.';}
          element.removeAttribute('include-html');
          includeHTML();
        }
      }
      xhttp.open('GET', file, true);
      xhttp.send();
      console.log('run' + i);
      return;
    }
  }
}

includeHTML();