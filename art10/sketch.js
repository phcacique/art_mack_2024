let noiseScale = 0.006;

function setup() {
  start();
  noLoop();
  p5grain.setup();
}

function start(){
  createCanvas(innerWidth, innerHeight);
}

function draw(){
  setBG()
  
  noFill();

  let d = 100
  let margin = 100
  let w = parseInt(width / d) + 1
  let h = parseInt(width / d) + 1

  for(var i=0; i<w; i++){
    for(var j=0; j<h; j++){
      for(var k=0; k<5; k++){

        let c = color(palette[Math.floor(random(0,palette.length))])  
        c.setAlpha(random(10,80))
        noStroke()
        let x1 = -random(d)
        let y1 = -random(d)
        let x2 = random(d)
        let y2 = -random(d)
        let x3 = random(d)
        let y3 = random(d)
        let x4 = -random(d)
        let y4 = random(d)
      
        fill(c)
        push()
        translate(i * (d+margin), j * (d+margin))
        quad(x1, y1, x2, y2, x3, y3, x4, y4)
        pop()
      }
    }
  }

  applyMonochromaticGrain(10)

}