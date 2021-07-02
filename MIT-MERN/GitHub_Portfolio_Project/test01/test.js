const includeHTML = () => {
  let element, file, xhttp;
  let elementList = document.getElementsByTagName("*");
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