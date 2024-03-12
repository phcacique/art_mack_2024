function setup() {
  start();
  noLoop()
  p5grain.setup();
}


function start(){
  createCanvas(innerWidth, innerHeight);
  
}

function draw(){
  setBG()

  let s = 80
  let w = innerWidth / s
  let h = innerHeight / s

  for(var i=0; i<w; i++){
    for(var j=0; j<h; j++){
      // stroke(color(palette[Math.floor(random(0,palette.length))]));
      strokeWeight( 0 );
      // strokeCap(ROUND);

      let c = color(palette[Math.floor(random(0,palette.length))])
      c.setAlpha( random(100, 255))
      fill(c)

      let spacing = 0
      let x1 = i * (s + spacing)
      let y1 = j * (s + spacing)

      push();
      translate(x1, y1); 
      let angle = 0.03
      rotate( i * random(-angle, angle));
      
      rect(0, 0, s, s);
      pop();  
    }
  }
  applyMonochromaticGrain(11)
}