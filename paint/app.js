var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

function resize(){
    ctx.canvas.width = window.innerWidth - 0.1*window.innerWidth;
    ctx.canvas.height = window.innerHeight - 0.1*window.innerHeight;
}

var pos = {x:0,y:0};

function setPosition(e){
    pos.x = e.clientX;
    pos.y = e.clientY;
}
function draw(e){
    if (e.buttons !== 1) return; // if mouse is not clicked, do not go further
 
    var color = "#"+document.getElementById("hex").value;
    var size = document.getElementById("size").value;
    ctx.beginPath(); // begin the drawing path
    
    // line properties
    ctx.lineWidth = 12;
    ctx.lineWidth = size; // width of line
    ctx.lineCap = "round"; // rounded end cap
    ctx.strokeStyle = color; // hex color of line

    // draw line
    ctx.moveTo(pos.x, pos.y); // from position
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to position
 
    ctx.stroke(); // draw it!
}



window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);