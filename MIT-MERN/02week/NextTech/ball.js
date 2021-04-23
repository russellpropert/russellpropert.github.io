//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
console.log(ball);
var velocity = 5;
var positionX = 0;
var positionY = 200;
var reverseX = false;
var reverseY = false;
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;

  if (reverseX === false) {
  positionX = positionX + velocity;
  } else {
  positionX = positionX - velocity;
  }

  if (reverseY === false) {
  positionY = positionY + velocity;
  } else {
  positionY = positionY - velocity;
  }

  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';

  if (positionX >= Xmax || positionX <= Xmin) {
    reverseX = !reverseX;
  }

  if (positionY >= Ymax || positionY <= Ymin) {
    reverseY = !reverseY;
  }

}

setInterval(moveBall, 10);
