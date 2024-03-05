function setup() {
  createCanvas(innerWidth, innerHeight);
  p5grain.setup();

  noLoop()
}

function draw(){
  setBG()

  let s = 80
  let w = innerWidth / s
  let h = innerHeight / s

  for(var i=0; i<w; i++){
    for(var j=0; j<h; j++){
      // stroke(color(palette[Math.floor(random(0,palette.length))]));
      // strokeWeight( random(2) );
      // strokeCap(ROUND);

      let c = color(palette[Math.floor(random(0,palette.length))])
      c.setAlpha( random(100, 255))
      strokeWeight( 0 )
      fill(c)  
      // stroke(c)  

      let x1 = i * s 
      let y1 = j * s
 
      square(x1, y1, s)
      
    }
  }
  
  applyMonochromaticGrain(11)
}
