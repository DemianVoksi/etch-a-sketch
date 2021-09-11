const sketchContainer = document.querySelector('#sketchContainer');



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


function divDimensions(dimension) {
  let percentage = Number(100 / dimension);
  return `${percentage}%`
}

function getSize(numberOfFields) {
  let size = Number(numberOfFields * numberOfFields);
  return size
}

function getNumOfFields(num) {
  let theNum = Number(num);
  return theNum
} 

function generateGrid(fields) {
  // fields = getSize(number)
  
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

function blackWhiteButton(whichColor) {
  let sketchDiv = document.getElementsByClassName("sketchDiv");
  for (let i = 0 ; i < sketchDiv.length; i++) {
    sketchDiv[i].addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = whichColor;
    }, false); 
  }
  sketchContainer.appendChild(sketchDiv);

}

function colorButton() {
  let sketchDiv = document.getElementsByClassName("sketchDiv");
  for (let i = 0 ; i < sketchDiv.length; i++) {
    sketchDiv[i].addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = getRGB();
    }, false); 
  }
  sketchContainer.appendChild(sketchDiv);

}

function clearButton() {
  let sketchDiv = document.getElementsByClassName("sketchDiv");
  for (let i = 0 ; i < sketchDiv.length; i++) {
    sketchDiv[i].style.backgroundColor = "#FFFFF0"; 
  }
  sketchContainer.appendChild(sketchDiv);

}


window.onload = () => generateGrid(getNumOfFields(25))