let color;
function red() {
  document.getElementById('redButton').classList.add('red');
  document.getElementById('orangeButton').classList.remove('orange');
  document.getElementById('yellowButton').classList.remove('yellow');
  document.getElementById('greenButton').classList.remove('green');
  document.getElementById('blueButton').classList.remove('blue');
  document.getElementById('purpleButton').classList.remove('purple');
  color = 'red';
}

function orange() {
  document.getElementById('orangeButton').classList.add('orange');
  document.getElementById('redButton').classList.remove('red');
  document.getElementById('yellowButton').classList.remove('yellow');
  document.getElementById('greenButton').classList.remove('green');
  document.getElementById('blueButton').classList.remove('blue');
  document.getElementById('purpleButton').classList.remove('purple');
  color = 'orange';
}

function yellow() {
  document.getElementById('yellowButton').classList.add('yellow');
  document.getElementById('redButton').classList.remove('red');
  document.getElementById('orangeButton').classList.remove('orange');
  document.getElementById('greenButton').classList.remove('green');
  document.getElementById('blueButton').classList.remove('blue');
  document.getElementById('purpleButton').classList.remove('purple');
  color = 'yellow';
}

function green() {
  document.getElementById('greenButton').classList.add('green');
  document.getElementById('redButton').classList.remove('red');
  document.getElementById('orangeButton').classList.remove('orange');
  document.getElementById('yellowButton').classList.remove('yellow');
  document.getElementById('blueButton').classList.remove('blue');
  document.getElementById('purpleButton').classList.remove('purple');
  color = 'green';
}

function blue() {
  document.getElementById('blueButton').classList.add('blue');
  document.getElementById('redButton').classList.remove('red');
  document.getElementById('orangeButton').classList.remove('orange');
  document.getElementById('yellowButton').classList.remove('yellow');
  document.getElementById('greenButton').classList.remove('green');
  document.getElementById('purpleButton').classList.remove('purple');
  color = 'blue';
}

function purple() {
  document.getElementById('purpleButton').classList.add('purple');
  document.getElementById('redButton').classList.remove('red');
  document.getElementById('orangeButton').classList.remove('orange');
  document.getElementById('yellowButton').classList.remove('yellow');
  document.getElementById('greenButton').classList.remove('green');
  document.getElementById('blueButton').classList.remove('blue');
  color = 'purple';
}

function changeBackground(divID) {
  const div = document.getElementById(divID)
  div.classList.remove('red');
  div.classList.remove('orange');
  div.classList.remove('yellow');
  div.classList.remove('green');
  div.classList.remove('blue');
  div.classList.remove('purple');
  div.classList.add(color);
}