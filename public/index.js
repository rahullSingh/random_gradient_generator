const randomButton=document.querySelector("#random_button");

const button_top=document.querySelector("#button_top");
const button_right=document.querySelector("#button_right");
const button_bottom=document.querySelector("#button_bottom");
const button_left=document.querySelector("#button_left");

// var colors_generated_numbers;
function randomNumber(){
  return Math.floor(Math.random()*255);
}

var randomColor1;
var randomColor2;
var randomColor3;
var randomColor4;
var randomColor5;
var randomColor6;
function backgroundColor(){
  randomColor1=randomNumber();
  randomColor2=randomNumber();
  randomColor3=randomNumber();
  randomColor4=randomNumber();
  randomColor5=randomNumber();
  randomColor6=randomNumber();
  document.body.style.backgroundImage=`linear-gradient(250deg,
    rgb(${randomColor1},${randomColor2},${randomColor3}),
    rgb(${randomColor4},${randomColor5},${randomColor6})
  )`
  // console.log(colors_generated_numbers);
}

function backgroundColor_top(){
  // console.log(colors_generated_numbers);
  document.body.style.backgroundImage=`linear-gradient(to top,
    rgb(${randomColor1},${randomColor2},${randomColor3}),
    rgb(${randomColor4},${randomColor5},${randomColor6})
  )`
}

function backgroundColor_right(){
  // console.log(colors_generated_numbers);
  document.body.style.backgroundImage=`linear-gradient(to right,
    rgb(${randomColor1},${randomColor2},${randomColor3}),
    rgb(${randomColor4},${randomColor5},${randomColor6})
  )`
}

function backgroundColor_bottom(){
  // console.log(colors_generated_numbers);
  document.body.style.backgroundImage=`linear-gradient(to bottom,
    rgb(${randomColor1},${randomColor2},${randomColor3}),
    rgb(${randomColor4},${randomColor5},${randomColor6})
  )`
}

function backgroundColor_left(){
  // console.log(colors_generated_numbers);
  document.body.style.backgroundImage=`linear-gradient(to left,
    rgb(${randomColor1},${randomColor2},${randomColor3}),
    rgb(${randomColor4},${randomColor5},${randomColor6})
  )`
}

randomButton.addEventListener("click",backgroundColor);

button_top.addEventListener("click",backgroundColor_top);
button_right.addEventListener("click",backgroundColor_right);
button_bottom.addEventListener("click",backgroundColor_bottom);
button_left.addEventListener("click",backgroundColor_left);
