var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
//body.style.background = "red";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+")";
    css.textContent = body.style.background + ";";
}

//setting background after button click
function randomBackground() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

//generating random Color in hex
function randomColor() {
	let hexColor = Math.random().toString(16);
	hexColor = "#" + hexColor.slice(2, 8);
	return hexColor;
}

// per ta shfaqur kodin e ngjyres se pare
setGradient();
// kto i kemi von tek html pro kjo menyra ktu ne js esh me e mir se mund te bojm modifikime
color1.addEventListener("input", setGradient);
// 	// console.log(color1.value);
color2.addEventListener("input", setGradient);
	//console.log(color2.value);
//per butonin e ranodm color
button.addEventListener("click", randomBackground);

