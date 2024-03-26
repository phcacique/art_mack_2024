let noiseScale = 0.01
let zoff = 1
let numLines = 50

var colors = []

function setup() {
  start()
  // noLoop() 
}

function start(){
  createCanvas(innerWidth, innerHeight);
  for(i=0; i<numLines; i++){
    let c = color(palette[Math.floor(random(0,palette.length))])  
    c.setAlpha(80,255)
    colors.push(c)
  }
}

function draw(){
  setBG()

  let s = 10
  let h = 1000
  let w = innerWidth / s

  

  for(j=0; j<numLines; j++){
    stroke(colors[j])
    strokeWeight(1)
    noFill()
    beginShape()
    for(var i=0; i<w; i++){
    
      let x1 = i * s
      let y1 = (noise(i * noiseScale, j * noiseScale, zoff  ) * h ) 
  
      vertex(x1,y1)
    }
    endShape()
  }

  zoff += 0.001

  // filter(BLUR, 2);
}