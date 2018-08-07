var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var circles = [];

function drawCircle(circ) {
    c.beginPath();
    c.arc(circ.x, circ.y, circ.r, 0, Math.PI * 2, true);
    c.fillStyle = circ.color;
    c.fill();
}

for (k = 0; k < 100; k++) {

    var rad = Math.random()*15 + 30;
    var x = Math.random() * (canvas.width - r*2) + r;
    var y = Math.random() * (canvas.height - r * 2) + r;
    var vy = (Math.random() - 0.5) * 8;
    var vx = (Math.random() - 0.5) * 8;
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;

    var col = 'rgb(' + r + ',' + g + ',' + b + ')';
    circles.push(new Circle(x, y, rad, vx, vy, col));

}


function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw);

    for (k = 0; k < circles.length; k++) {
        circles[k].update(canvas.width, canvas.height);
        drawCircle(circles[k]);
    }
}

draw();
