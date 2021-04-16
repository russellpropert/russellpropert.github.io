var counter = 0
function count(number) {
    console.log("Counter: " + counter);
    counter++;
}

setInterval(count,3000);
