require(
	[],

	function () {
        console.log("yo");

    var color = document.getElementById("doitButton");
    var hueSlider = document.getElementById("hueSlider");
    var satSlider = document.getElementById("satSlider");
    var valSlider = document.getElementById("valSlider");
    var colorDisplay = document.getElementById("colorDisplay");

    var color = "hsl(180,100%,100%)";
    colorDisplay.style.backgroundColor = color
    //default color for colorDisplay

    doitButton.addEventListener("click",function(ev){
    	var textElement = document.getElementById("userColor");
    	var hColor = textElement.value;
    	colorDisplay.style.backgroundColor = hColor;
    });
    //display and show color in article

    hueSlider.addEventListener("input",function(ev){
    	color = "hsl(" + hueSlider.value + "," + satSlider.value*100 + "%,50%)";//multiply sat value as hsl() function for sat is in %
    	colorDisplay.style.backgroundColor = color;
	});

	satSlider.addEventListener("input", function(ev) {
		var colorDisplay = document.getElementById("colorDisplay");
		color = "hsl("+hueSlider.value+","+satSlider.value*100+"%,50%)";
		//get current hue value and change the satSlider value accordingly.
		colorDisplay.style.backgroundColor = color;//setting the color in hsl() setting
		});

	valSlider.addEventListener("input", function(ev) {
		colorDisplay.style.opacity = valSlider.value;
		});
});