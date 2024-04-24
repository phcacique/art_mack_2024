let bgpalette = [
              // '#F6CF4E', 
              // '#4EAFF6',
              // '#F64E4E',
              '#FEFBF6'
              // '#393d3f'
            ]; 

let palette = [
              //  '#FFF5C2',
               '#8ACDD7', 
               '#F9F9E0', 
               '#FFC0D9',
               '#FF90BC'
              ]

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