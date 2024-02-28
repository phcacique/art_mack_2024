function setup() {
  start();
  noLoop()
}


function start(){
  createCanvas(innerWidth, innerHeight);
  setBG()

  let s = 40
  let w = innerWidth / s
  let h = innerHeight / s

  for(var i=0; i<w; i++){
    for(var j=0; j<h; j++){
      stroke(color(palette[Math.floor(random(0,palette.length))]));
      strokeWeight( random(2) );
      // strokeCap(ROUND);

      let prob = random(100)


      let x1 = (prob>50) ? i * s : (i+1) * s
      let x2 = (prob<50) ? i * s : (i+1) * s
      let y1 = j * s
      let y2 = (j + 1) * s
      line(x1, y1, x2, y2)
    }
  }
}