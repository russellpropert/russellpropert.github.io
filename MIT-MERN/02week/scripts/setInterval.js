var time = 2000
var position = 0
var velocity = 5
function count(number) {
    console.log("Position: " + position);
    position = position + velocity;
}

setInterval(count,time);