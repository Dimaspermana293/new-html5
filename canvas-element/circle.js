const myCanvas= document.getElementById("myCanvas");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;


const c = myCanvas.getContext('2d');
// ctx.fillrect(25, 25, 100, 100);
let x = 300;

function draw(){
    window.requestAnimationFrame(draw);
    console.log(draw);
    c.fillStyle = "red";
    c.strokeStyle = "#000";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(300,300,150,0,2 * Math.PI);
    c.fill();
    c.stroke();
    x++;
}
draw();
