/* ***functions*** */

function getRGB() {
  // returns a random RGB color code

  let rgbRed = Math.floor(Math.random() * 256);
  let rgbGreen = Math.floor(Math.random() * 256);
  let rgbBlue = Math.floor(Math.random() * 256);
  let rgbCode = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
  
  return rgbCode
}

function range(start, end) {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i)
  }
  return rangeArray
}

function domCreatorBlack() {
  for (i of range(1, 256)) {
    newDivBlack()
  }
}

function domCreatorColor() {
  for (i of range(1, 256)) {
    newDivColor()
  }
}
/* ***DOM*** */

// sketch container


const sketchContainer = document.querySelector('#sketchContainer');


function newDivBlack() {
  const sketchDiv = document.createElement('div');
  sketchDiv.classList.add('sketchDiv');
  sketchDiv.style.height = '6.25%';
  sketchDiv.style.width = '6.25%';
  sketchDiv.style.overflow = 'none';
  /* sketchDiv.style.border = '1px solid black'; */
  sketchDiv.addEventListener("mouseenter", function(event) {
    event.target.style.backgroundColor = 'black';
  }, false);
  sketchDiv.addEventListener("mouseleave", function(event) {
    event.target.style.backgroundColor = 'black';
  }, false);
  sketchContainer.appendChild(sketchDiv);
}


function newDivColor() {
  const sketchDiv = document.createElement('div');  
  sketchDiv.classList.add('sketchDiv');
  sketchDiv.style.height = '6.25%';
  sketchDiv.style.width = '6.25%';
  sketchDiv.style.overflow = 'none';
  /* sketchDiv.style.border = '1px solid black'; */
  sketchDiv.addEventListener("mouseenter", function(event) {
    event.target.style.backgroundColor = getRGB();
  }, false);
  sketchDiv.addEventListener("mouseleave", function(event) {
    event.target.style.backgroundColor = getRGB();
  }, false);
  sketchContainer.appendChild(sketchDiv);  
}