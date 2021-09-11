const sketchContainer = document.querySelector('#sketchContainer');
let slider = document.getElementById('slider');
let output = slider.value;



// RGB function

function getRGB() {
  /* Returns a random RGB color code.
  Called by colorButton() */

  let rgbRed = Math.floor(Math.random() * 256);
  let rgbGreen = Math.floor(Math.random() * 256);
  let rgbBlue = Math.floor(Math.random() * 256);
  let rgbCode = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
  
  return rgbCode
}



// Button functions

function blackWhiteButton(whichColor) {
  /* Activates the black button or eraser button. 
  Called by the button html element. */

  let sketchDiv = document.getElementsByClassName("sketchDiv");
  for (let i = 0 ; i < sketchDiv.length; i++) {
    sketchDiv[i].addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = whichColor;
    }, false); 
  }
  sketchContainer.appendChild(sketchDiv);
}

function colorButton() {
  /* Activates the color button. 
  Called by the button html element. */

  let sketchDiv = document.getElementsByClassName("sketchDiv");
  for (let i = 0 ; i < sketchDiv.length; i++) {
    sketchDiv[i].addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = getRGB();
    }, false); 
  }
  sketchContainer.appendChild(sketchDiv);
}

function clearButton() {
  /* Activates the clear button. 
  Called by the button html element. */

  let sketchDiv = document.getElementsByClassName("sketchDiv");
  for (let i = 0 ; i < sketchDiv.length; i++) {
    sketchDiv[i].style.backgroundColor = "#FFFFF0"; 
  }
  sketchContainer.appendChild(sketchDiv);
}



// Grid functions

function clear() {
  /*
  Clears the sketchContainer.
  Called on by makeNewGrid */

  sketchContainer.innerHTML = '';
}

function makeNewGrid(value) {
  /*
  Produces a new grid of divs in the sketchContainer with the 
  value of the divs set by the slider.
  Calls on clear() and generateGrid()
  Called by slider.onchage */

  clear()
  generateGrid(getNumOfFields(value))
}

function getNumOfFields(num) {
  /* Gets the number of one side of the grid, squares it 
  and returns the number of divs in the grid. 
  Gets (num) from the slider value.
  Gets called by generateGrid()
  */

  let theNum = Number(num);
  return theNum
} 

function divDimensions(dimension) {
  /* Returns, in percentage, the dimensions of a single div element 
  in the sketchContainer parent element. 
  Called by generateGrid().
  Calls on the value provided by the slider. */

  let percentage = Number(100 / dimension);
  return `${percentage}%`
}

function generateGrid(fields) {
  /* Generates the grid of divs
  (actually a flex container but grid sounds better)
  Calls on getNumOfFields(num) for fields, and on divDimensions().
  Called by window.onload.
  */
  
  for(let i=0; i < fields * fields; i++) {
    sketchDiv = document.createElement('div');
    sketchDiv.setAttribute('id', 'sketchDiv1');
    sketchDiv.classList.add('sketchDiv');
    sketchDiv.style.height = divDimensions(fields);
    sketchDiv.style.width = divDimensions(fields);
    sketchDiv.style.overflow = 'none'
    sketchContainer.appendChild(sketchDiv);
  }
}


slider.onchange = (v) => makeNewGrid(v.target.value);
window.onload = () => generateGrid(getNumOfFields(output))
