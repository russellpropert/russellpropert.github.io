var ball1 = document.getElementById('ball1');
var ball1velocity = 4;
var ball1left_position = 0;
var ball1top_position = 0;
var ball1leftDirection = 1;
var ball1topDirection = 1;
var ball1color = "purple"

var ball2 = document.getElementById('ball2');
var ball2velocity = 3;
var ball2left_position = 0;
var ball2top_position = 0;
var ball2leftDirection = 1;
var ball2topDirection = 1;
var ball2color = "blue"

var ball3 = document.getElementById('ball3');
var ball3velocity = 2;
var ball3left_position = 0;
var ball3top_position = 0;
var ball3leftDirection = 1;
var ball3topDirection = 1;
var ball3color = "violet"

var ball4 = document.getElementById('ball4');
var ball4velocity = 1;
var ball4width = 15;
var ball4height = 15;
var ball4left_center = 350;
var ball4top_center = 350;
var ball4radius = 250;
var ball4angle = 270;
var ball4color = "lightgrey"

var ball5 = document.getElementById('ball5');
var ball5velocity = 1;
var ball5width = 40;
var ball5height = 40;
var ball5left_center = 350;
var ball5top_center = 350;
var ball5radius = 290;
var ball5angle = 0;
var ball5color = "burlywood"

var ball6 = document.getElementById('ball6');
var ball6velocity = 1;
var ball6width = 50;
var ball6height = 50;
var ball6left_center = 350;
var ball6top_center = 350;
var ball6radius = 350;
var ball6angle = 90;
var ball6color = "#48accc"

var ball7 = document.getElementById('ball7');
var ball7velocity = 1;
var ball7width = 20;
var ball7height = 20;
var ball7left_center = 350;
var ball7top_center = 350;
var ball7radius = 400;
var ball7angle = 180;
var ball7color = "darkorange"

function move_ball1() {
  var ball1width = window.innerWidth - 50;
  var ball1height = window.innerHeight - 50;

  if (ball1leftDirection === 1) {
    ball1left_position = ball1left_position + ball1velocity;
  } else {
    ball1left_position = ball1left_position - ball1velocity;
  }

  if (ball1topDirection === 1) {
    ball1top_position = ball1top_position + ball1velocity;
  } else {
    ball1top_position = ball1top_position - ball1velocity;
  }

  ball1.style.left = ball1left_position + 'px';
  ball1.style.top = ball1top_position + 'px';
  ball1.style.background = ball1color;

  if (ball1left_position >= ball1width) {
    ball1leftDirection = -1;
  }
  
  if (ball1left_position <= 0) {
    ball1leftDirection = 1;
  }

  if (ball1top_position >= ball1height) {
    ball1topDirection = -1;
  }
  
  if (ball1top_position <= 0) {
    ball1topDirection = 1;
  }
}


function move_ball2() {
  var ball2width = window.innerWidth - 50;
  var ball2height = window.innerHeight - 50;

  if (ball2leftDirection === 1) {
    ball2left_position = ball2left_position + ball2velocity;
  } else {
    ball2left_position = ball2left_position - ball2velocity;
  }

  if (ball2topDirection === 1) {
    ball2top_position = ball2top_position + ball2velocity;
  } else {
    ball2top_position = ball2top_position - ball2velocity;
  }

  ball2.style.left = ball2left_position + 'px';
  ball2.style.top = ball2top_position + 'px';
  ball2.style.background = ball2color;

  if (ball2left_position >= ball2width) {
    ball2leftDirection = -1;
  }
  
  if (ball2left_position <= 0) {
    ball2leftDirection = 1;
  }

  if (ball2top_position >= ball2height) {
    ball2topDirection = -1;
  }
  
  if (ball2top_position <= 0) {
    ball2topDirection = 1;
  }
}


function move_ball3() {
  var ball3width = window.innerWidth - 50;
  var ball3height = window.innerHeight - 50;

  if (ball3leftDirection === 1) {
    ball3left_position = ball3left_position + ball3velocity;
  } else {
    ball3left_position = ball3left_position - ball3velocity;
  }

  if (ball3topDirection === 1) {
    ball3top_position = ball3top_position + ball3velocity;
  } else {
    ball3top_position = ball3top_position - ball3velocity;
  }

  ball3.style.left = ball3left_position + 'px';
  ball3.style.top = ball3top_position + 'px';
  ball3.style.background = ball3color;

  if (ball3left_position >= ball3width) {
    ball3leftDirection = -1;
  }
  
  if (ball3left_position <= 0) {
    ball3leftDirection = 1;
  }

  if (ball3top_position >= ball3height) {
    ball3topDirection = -1;
  }
  
  if (ball3top_position <= 0) {
    ball3topDirection = 1;
  }
}

function move_ball4() {

  var ball4left_position = (Math.cos(ball4angle * (Math.PI / 180)) * ball4radius) + ball4left_center;
  var ball4top_position = (Math.sin(ball4angle * (Math.PI / 180)) * ball4radius) + ball4top_center;

  ball4.style.left = ball4left_position - ball4width / 2 + 'px';
  ball4.style.top = ball4top_position - ball4height / 2 + 'px';
  ball4.style.width = ball4width + 'px';
  ball4.style.height = ball4height + 'px';
  ball4.style.background = ball4color;

  if (ball4angle >= 359) {
    ball4angle = 0;
  } else {
    ball4angle = ball4angle + ball4velocity;
  }
}

function move_ball5() {

  var ball5left_position = (Math.cos(ball5angle * (Math.PI / 180)) * ball5radius) + ball5left_center;
  var ball5top_position = (Math.sin(ball5angle * (Math.PI / 180)) * ball5radius) + ball5top_center;

  ball5.style.left = ball5left_position - ball5width / 2 + 'px';
  ball5.style.top = ball5top_position - ball5height / 2 + 'px';
  ball5.style.width = ball5width + 'px';
  ball5.style.height = ball5height + 'px';
  ball5.style.background = ball5color;

  if (ball5angle >= 359) {
    ball5angle = 0;
  } else {
    ball5angle = ball5angle + ball5velocity;
  }
}

function move_ball6() {

  var ball6left_position = (Math.cos(ball6angle * (Math.PI / 180)) * ball6radius) + ball6left_center;
  var ball6top_position = (Math.sin(ball6angle * (Math.PI / 180)) * ball6radius) + ball6top_center;
  console.log(ball6angle);
  console.log(ball6left_position);
  console.log(ball6top_position);


  ball6.style.left = ball6left_position - ball6width / 2 + 'px';
  ball6.style.top = ball6top_position - ball6height / 2 + 'px';
  ball6.style.width = ball6width + 'px';
  ball6.style.height = ball6height + 'px';
  ball6.style.background = ball6color;

  if (ball6angle >= 359) {
    ball6angle = 0;
  } else {
    ball6angle = ball6angle + ball6velocity;
  }
}

function move_ball7() {

  var ball7left_position = (Math.cos(ball7angle * (Math.PI / 180)) * ball7radius) + ball7left_center;
  var ball7top_position = (Math.sin(ball7angle * (Math.PI / 180)) * ball7radius) + ball7top_center;

  ball7.style.left = ball7left_position - ball7width / 2 + 'px';
  ball7.style.top = ball7top_position - ball7height / 2 + 'px';
  ball7.style.width = ball7width + 'px';
  ball7.style.height = ball7height + 'px';
  ball7.style.background = ball7color;

  if (ball7angle >= 359) {
    ball7angle = 0;
  } else {
    ball7angle = ball7angle + ball7velocity;
  }
}


setInterval(move_ball1,10);
setInterval(move_ball2,10);
setInterval(move_ball3,10);
setInterval(move_ball4,10);
setInterval(move_ball5,13);
setInterval(move_ball6,16);
setInterval(move_ball7,20);