let myImage;

function preload() {
	myImage = loadImage("/assets/template.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("brown");
	
}

function draw() {
	translate(width/2, height/2);
	imageMode(CENTER);
	image(myImage, 0, 0, myImage.width/2, myImage.height/2);
}
