let noiseScale = 0.004;
let gridSize = 1;
let lines = [];
let lineCount = 1000;


function setup() {
  start();
}

function start(){
  createCanvas(innerWidth, innerHeight);
  setBG()
  noiseScale = random(0.001, 0.004)

  lines = [];
  for(var i=0; i<lineCount; i++){
    lines.push(createLine(random(0,width), random(0,height), random(50,500)));  
  }
  innerDraw();
}

function innerDraw(){
  for(var i=0; i<lines.length; i++){
    drawLine(lines[i]);
  }
}

function drawLine(lineInfo){
  stroke(lineInfo.color);
  strokeWeight(lineInfo.weight);
  // strokeCap(SQUARE);
  for(var i=0; i<lineInfo.segments; i++){
    line(lineInfo.points[i].x,
         lineInfo.points[i].y,
         lineInfo.points[i+1].x, 
         lineInfo.points[i+1].y);
  }
}

function createLine(x,y,segments){
  let points = [];
  points.push({x:x, y:y});
  for(var i=0; i<segments; i++){
    let angle = noise(noiseScale * x, noiseScale * y) * PI * 2;
    let nx = x + gridSize * cos(angle);
    let ny = y + gridSize * sin(angle);
    x = nx;
    y = ny;
    points.push({x:nx, y:ny});
  }
  
  return {color: color(palette[Math.floor(random(0,palette.length))]), 
          points: points,
          weight: 0.5,
          segments: segments,
          cursor: 0}
}