var velocity = 5;
var left_position = 0;
var top_position = 0;
var ball = document.getElementById('ball');

// YOUR CODE 
// ----------------

var leftDirection = 1;
var topDirection = 1;

function move_ball() {
  var width = window.innerWidth - 50;
  var height = window.innerHeight - 50;
  //console.log(width);
  //console.log(height);
  //console.log(left_position);
  //console.log(top_position);
  //console.log(topDirection);

  if (leftDirection === 1) {
    left_position = left_position + velocity;
  } else {
    left_position = left_position - velocity;
  }

  if (topDirection === 1) {
    top_position = top_position + velocity;
  } else {
    top_position = top_position - velocity;
  }

  ball.style.left = left_position + 'px';
  ball.style.top = top_position + 'px';

  if (left_position >= width || left_position <= 0) {
    leftDirection = leftDirection * -1;
  }

  if (top_position >= height || top_position <= 0) {
    topDirection = topDirection * -1;
  }
}

setInterval(move_ball,20);