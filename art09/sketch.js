let noiseScale = 0.006;

function setup() {
  start();
  noLoop()
}

function start(){
  createCanvas(innerWidth, innerHeight);
  setBG()

  let s = 80
  let h = innerHeight / s
  let w = innerWidth / s
  let padding = s/3
  let points = 6

  for(j=0; j<h; j++){
    let c = color(palette[Math.floor(random(0,palette.length))])  
    stroke(c);
    for(var i=0; i<w; i++){
        drawLines( i* (s + padding), 
                  j*(s + padding) + ( (i%2==0) ? s/2 : 0 ),
                  s/2, 
                  points)
    }
  }
  
}

function drawLines(cx, cy, radius, points){
  let angle = 0
  let step = PI*2 / points

  let vertices = []
  let indices = []

  for (var i=0; i<points; i++){
    indices.push(i)
    let x = cx + radius * cos(angle)
    let y = cy + radius * sin(angle)

    vertices.push({x: x, y: y})

    angle += step
  }
  
  let c = color(palette[Math.floor(random(0,palette.length))])  
  stroke(c);

  let numLines = points
  for(var i=0; i<numLines; i++) {
    let indices2 = indices.slice().sort(() => Math.random() - 0.5)
    let a = indices2.pop()
    let b = indices2.pop()
    
    line(vertices[a].x, vertices[a].y, vertices[b].x, vertices[b].y)
  }
}