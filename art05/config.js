let bgpalette = [
              // '#F6CF4E', 
              // '#4EAFF6',
              // '#F64E4E',
              '#fdfdff'
              // '#393d3f'
            ]; 

let palette = ['#393d3f', 
               '#c6c5b9', 
               '#62929e',
               '#546a7b']

let palette2 = ['#D9D9D9', 
              '#969090']

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