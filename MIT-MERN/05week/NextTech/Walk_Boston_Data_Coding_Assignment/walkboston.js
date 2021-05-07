function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let sortByPay = people.sort((a, b) => {return parseFloat(a[11] - b[11])});
  let reverseSortByPay = sortByPay.reverse();
  //let over200k = people.filter(person => parseFloat(person[11]) > 200000);
  let html = '';
  for (let i = 0; i < 5; i++) {
    html +=
      '<li class="post">' + '<h2>' + reverseSortByPay[i][8] + '</h2>' + '<h3>' + reverseSortByPay[i][11] + '</h3>';
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<h1>Top Salaries</h1><ul id="topSalaries">' + html + '</ul>';
}
renderPosts(boston, document.getElementById('container'));
