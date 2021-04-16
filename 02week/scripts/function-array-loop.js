var list = [];
var count = 0

while (count < 3000) {
    list.push(create());
    count++;
}

var i = 0;
var length = list.length;

function ball_color_change_loop() {
    setTimeout(function() {
        var ball = list[Math.floor(Math.random()*length-1)];
        colorRandom(ball);
        i++;
        if (i < length*2) {
            ball_color_change_loop();
        }
    }, 2);
}

ball_color_change_loop();