const cardGrid = () => {
  windowWidth = window.innerWidth;

  //Get all grids on page.
  const grids = document.getElementsByClassName('code-grid');
  const windowThreshold = 725;

  const setColumns = () => {
    if (windowWidth > windowThreshold) {
      return '1fr 1fr'
    } else {
      return '1fr';
    }
  }

  const getRows = (cards) => {
    if (windowWidth > windowThreshold) {
      return Math.ceil(cards.length / 2);
    } else {
      return cards.length;
    }
  }

  const getOddCardSpan = (cards) => {
    const oddCard = cards.length % 2;
    if (oddCard === 1 && windowWidth > windowThreshold) {
      return '1 / span 2';
    } else {
      return '1';
    }
  }

  //Iterate through grids.
  for (let i = 0; i < grids.length; i++) {
    const cards = grids.item(i).getElementsByClassName('card');
    const columns = setColumns(i);
    const rows = getRows(cards);
    const oddCardSpan = getOddCardSpan(cards);
    const last = cards.length - 1;

    // Set number of columns
    grids.item(i).style.gridTemplateColumns = columns;
    
    // Set number of rows
    grids.item(i).style.gridTemplateRows = `repeat(${rows}, auto)`;

    // Center odd card column if more than one row
    cards.item(last).style.gridColumn = oddCardSpan;
  }

}

window.addEventListener('resize', cardGrid);

cardGrid();