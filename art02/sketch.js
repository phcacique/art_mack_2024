var spacing, lineWidth;
var lastPoint;
var step = 0, totalSteps = 1000; 
var canvas;

var colorStep = 1/totalSteps;
var c = 0
var direction = 1;

function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  start()
}

function start(){
  createCanvas(innerWidth, innerHeight);
  setBG()

  lastPoint = {x:0, y:0};
  spacing = random(40,60);
  lineWidth = 1;
  colorStep = 1/totalSteps;

  // background(255);
  for(var i=0; i<totalSteps; i++){
    drawPath();
  }
}

function drawPath(){
  var newPoint = {x:-1, y:-1};
  
  
  while (newPoint.x < 0 || newPoint.x > width || newPoint.y < 0 || newPoint.y > height) {
    
      newPoint = {x:lastPoint.x + Math.floor(random(-1,2)) * spacing, 
                  y:lastPoint.y + Math.floor(random(-1,2)) * spacing}
  } 
  
  c += direction * colorStep;
  if (c > 1) {
    c = 1;
    direction = -1;
  } else if (c < 0) {
    c = 0;
    direction = 1;
  }
  
  stroke(color(palette[Math.floor(random(0,palette.length))]));
  strokeWeight(lineWidth)
  line(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);

  lastPoint = newPoint;
}