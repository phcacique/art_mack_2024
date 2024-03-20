let bgpalette = [
              // '#F6CF4E', 
              // '#4EAFF6',
              // '#F64E4E',
              '#faf9f9'
              // '#393d3f'
            ]; 

let palette = ['#ffd6ba', 
               '#bee3db', 
               '#89b0ae',
               '#555b6e']

// let palette2 = ['#D9D9D9', 
//               '#969090']

function setBG(){
    let selectedBG = floor(random(bgpalette.length))
    background(color(bgpalette[selectedBG]));
    // blendMode(MULTIPLY)
}

function mousePressed() {
    saveCanvas(canvas, 'myCanvas', 'jpg');
  }
  
  function keyPressed() {
    if(key == ' ') { start() }
  }