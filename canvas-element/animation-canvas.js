const myCanvas= document.getElementById("myCanvasAnimation");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

function draw(){
    const c = myCanvas.getContext('2d');
    window.requestAnimationFrame(draw);
    // ctx.fillrect(25, 25, 100, 100);
    
    c.fillStyle = "pink";
    c.strokeStyle = "#333";
    c.lineWidth = 2;
    
    c.arc(300,300,150,0,2 * Math.PI);
    c.fill();
    c.stroke();
}