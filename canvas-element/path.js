
const myCanvas= document.getElementById("myCanvas");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;


const c = myCanvas.getContext('2d');
// ctx.fillrect(25, 25, 100, 100);

function draw(){
    window.requestAnimationFrame(draw);
    console.log(draw);
    c.fillStyle = "pink";
    c.strokeStyle = "#333";
    c.lineWidth = 5;
    
    c.beginPath();
    c.moveTo(300,50);
    c.lineTo(450,350);
    c.lineTo(150,350);
    c.lineTo(300,50);
    c.fill();
    c.stroke();
}
draw();
