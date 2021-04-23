var length = data.length;

// you work goes here
// -----------------------

///*
function place_ball_loop() {
    setTimeout(function() {
        //console.log("beginning data length: " + data.length);
        //console.log("beginning variable length: " + length);
        number = data.splice(Math.floor(Math.random()*length-1),1);
        //console.log(number[0]);
        ball = number[0];
        create(ball.x, ball.y, ball.color);
        length = data.length;
        //console.log("ending data length: " + data.length);
        //console.log("ending variable length: " + length);
        if (length > 0) {
            place_ball_loop();
        }
    }, 1)
}

var number = data.splice(Math.floor(Math.random()*length-1),1);
var ball = number[0];
create(ball.x, ball.y, ball.color);
length = data.length;
place_ball_loop();
//*/

/*
while (counter < length) {
    var ball = data[counter];
    create(ball.x, ball.y, ball.color);
    counter++;
}
*/