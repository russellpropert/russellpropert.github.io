// This is a function that takes a page path as an argument
// You need to make the function load the content of that page into the "content" div on the index file
async function loadPage(page) {
  // fetch the page, use await
  const res = await fetch(page);
  // get text from res, use await
  const content = await res.text();
  // get the element with id 'content'
  const element = document.getElementById('content');
  // set innerHTML of the element
  element.innerHTML = content;
  // your code goes here
}

const routes = {
  '':           'index.html',
  '#signin':    'signin.html',
  '#mission':   'mission.html',
  '#about':     'about.html'
}

function router () {
  const link = window.location.hash;
  const route = routes[link];
  console.log(route);
  loadPage(route);
}

window.addEventListener('hashchange', router);
