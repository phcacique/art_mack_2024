let phase = 0;
let zoff = 0;
let mainX = 0;
let mainY = 0;

let minRadius = 10
let maxRadius = 300

let step = 10

function setup() {
  createCanvas(innerWidth, innerHeight);
  setBG()

  mainX = -maxRadius
  mainY = height/2
  p5grain.setup();
  minRadius = height / 4
  maxRadius = height / 2

}


function draw(){
  
  let index = Math.floor(random(0,palette.length))
  let c = color(palette[index])  
  c.setAlpha( random(10, 100) )

  translate(mainX, mainY );
  stroke(c);
  // fill(color(bgpalette[Math.floor(random(0,bgpalette.length))])  )
  strokeWeight(random(0,100));
  noFill();
  beginShape();
  let noiseMax = 0.5
  for (let a = 0; a < 2 * TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, minRadius, maxRadius);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  // phase += 0.03;
  zoff += 0.01;
  
  mainX += step
  if (mainX > width + maxRadius) {
    noLoop()
    applyMonochromaticGrain(10)
  }
}