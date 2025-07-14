const body = document.getElementsByTagName("body")[0];

function colorFlip(name) {
  body.style.backgroundColor = name;
}

function colorRandom() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  
  const random = `rgb(${red}, ${green}, ${blue})`
  
  body.style.backgroundColor = random;

}