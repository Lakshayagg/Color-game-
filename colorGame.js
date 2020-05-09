var numSquares=6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton= document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    colors = generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;

    for (var i = 0; i <squares.length; i++) {
        if(colors[i]){
            squares[i].style.background=colors[i];
        }else{
        	squares[i].style.display="none";
        }
    }
})

hardButton.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");  
    numSquares=6;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
    	squares[i].style.background = colors[i];
    	squares[i].style.display="block";
    }
})
resetButton.addEventListener("click",function(){
	colors = generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent="New Colors";
	messageDisplay.textContent="";
	for( var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
    h1.style.background = "steelblue";
})
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
 squares[i].style.backgroundColor= colors[i];
 squares[i].addEventListener("click",function(){
 	var clickedColor = (this.style.backgroundColor);
 	console.log(clickedColor,pickedColor);
 	if (clickedColor === pickedColor){
 		messageDisplay.textContent = "Correct";
 		resetButton.textContent="Play Again ?";
 		changeColors(clickedColor);
 		h1.style.background=clickedColor;
 	}else {
 		this.style.backgroundColor="#232323";
 		messageDisplay.textContent = "Try Again";
 	}
 });
}
function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};
function generateRandomColor(num){
    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb("+r+", "+g+", "+b+")";
}