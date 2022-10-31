let button;
let myImage;
let start = false;
let dimRect = 0;
let myCapture;

function preload() {
	myImage = loadImage("./assets/template2.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	translate(width/2, height/2);
	background(0);
	fill("white");
	textSize(30);
	textFont("Rye");
	textAlign(CENTER);
	push();
	textSize(60);
	text("THE WANTED TEST", 0, -100);
	pop();

	myCapture = createCapture(VIDEO);
		 myCapture.hide();
	
	text("What crime would you be wanted for?", 0, 100, 400, 300);
	
	button = createButton('click to find out');
	button.style('font-size', '20px');
	button.style('font-family', 'Rye');
  	button.style('background-color', 'red');
	button.size(300,80);
  	button.position(width/2 - 150, 400);
  	button.mousePressed(change);
	
}

function draw() {
	
	noStroke();
	translate(width/2, height/2);
	
	if (start == true) {
		button.remove();
		background("brown");
		text("Analizing your face... smile!", 0 ,0);
		push();
		rectMode(CORNER);
		rect(-200, 100, 400, 20);
		fill("green");
		rect(-200, 100, dimRect, 20);
		dimRect += 1;
		pop();
	if (dimRect == 410) {
		start = false;
		background("brown");
		imageMode(CENTER);
	 	image(myImage, 0, 0, myImage.width/2 + 100, myImage.height/2 + 100);
		
  		 scale(-1, 1);
  		image(myCapture, 0, 0, myCapture.width/3, myCapture.height/3);
	}
	}	
}

function change() {
	start = true;
}