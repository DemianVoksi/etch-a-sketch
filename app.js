/* ***functions*** */

function getRGB() {
  // returns a random RGB color code

  let rgbRed = Math.floor(Math.random() * 256);
  let rgbGreen = Math.floor(Math.random() * 256);
  let rgbBlue = Math.floor(Math.random() * 256);
  let rgbCode = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
  
  return rgbCode
}

/* ***DOM*** */

// sketch container


const sketchContainer = document.querySelector('#sketchContainer');

const sketchDiv = document.createElement('div');
sketchDiv.classList.add('sketchDiv');
sketchDiv.style.padding = '20px';
sketchDiv.style.width = '50px';
sketchDiv.style.border = '1px solid black';
sketchDiv.addEventListener("mouseenter", function(event) {
  event.target.style.backgroundColor = getRGB();
}, false);
sketchDiv.addEventListener("mouseleave", function(event) {
  event.target.style.backgroundColor = getRGB();
}, false);
container.appendChild(sketchDiv);
