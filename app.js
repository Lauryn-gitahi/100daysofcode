//selectors
const button=document.querySelector(".btn");
const body=document.querySelector("body");
const colors=["#ff9a9e","#fbc2eb", "#fcb69f","#ff9a9e","#a6c1ee"];

body.style.backgroundColor="#a6c1ee";
button.addEventListener("click", changeColor);

// function changeColor
function changeColor(){
  const colorIndex=parseInt(Math.random()*colors.length);
  body.style.backgroundColor=colors[colorIndex];


}
