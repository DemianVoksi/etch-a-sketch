const sketchContainer = document.querySelector('#sketchContainer');
const sketchDiv = document.createElement('div');

function createContainerItems(items) {
  // items = promptNum(num)

  for(let i=0; i < items * items; i++) {
    
    sketchDiv.classList.add('sketchDiv');
    sketchDiv.style.height = divDimensions(promptNum(25));
    sketchDiv.style.width = divDimensions(promptNum(25));
    sketchDiv.style.overflow = 'none'
    sketchContainer.appendChild(sketchDiv);
  }
}

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
  // creates array for a range function

  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i)
  }
  return rangeArray
}

function containerReload() {
  // clears the container of all appended child divs

  sketchContainer.innerHTML = ''
}

function domCreator(color) {
  for (i of range(1, promptNum(25) * promptNum(25))) {
    newDivGenerator(color)
  }
}

function domCreatorColor() {
  containerReload()
  for (i of range(1, promptNum(25) * promptNum(25))) {
    newDivColor()
  }
}

function promptNum(num) {
  let num1 = num;
  return num1
}

function divDimensions(num) {
  let percentage = Number(100 / num);
  return `${percentage}%`
}

function newDivGenerator(whichColor) {
  /* const sketchDiv = document.createElement('div');
  sketchDiv.classList.add('sketchDiv');
  sketchDiv.style.height = divDimensions(promptNum(25));
  sketchDiv.style.width = divDimensions(promptNum(25));
  sketchDiv.style.overflow = 'none';
  let sketchDiv = sketchContainer.querySelectorAll(".sketchDiv"); */
  sketchDiv.addEventListener("mouseenter", function(event) {
    event.target.style.backgroundColor = whichColor;
  }, false);
  sketchDiv.addEventListener("mouseleave", function(event) {
    event.target.style.backgroundColor = whichColor;
  }, false);
  sketchContainer.appendChild(sketchDiv);
}

function newDivColor() {
  const sketchDiv = document.createElement('div');  
  sketchDiv.classList.add('sketchDiv');
  sketchDiv.style.height = divDimensions(promptNum(25));
  sketchDiv.style.width = divDimensions(promptNum(25));
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



function clearDivs() {
  constDivs = document.querySelectorAll(".sketchDiv");
  for(i = 0; i < constDivs.length; i++) {
    constDivs.style.backgroundColor = '#FFFFF0';
  }
}

window.onload = () => createContainerItems(promptNum(25))