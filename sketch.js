let button, button2, input;
let myBackground;
let template = [];
let start = false;
let dimRect = 0;
let myCapture;

function preload() {
	myBackground = loadImage("./assets/background.png");
	template[0] = loadImage("./assets/template1.png");
	template[1] = loadImage("./assets/template2.png");
	template[2] = loadImage("./assets/template3.png");
	template[3] = loadImage("./assets/template4.png");
	template[4] = loadImage("./assets/template5.png");
	template[5] = loadImage("./assets/template6.png");
	template[6] = loadImage("./assets/template7.png");
	template[7] = loadImage("./assets/template8.png");
	template[8] = loadImage("./assets/template9.png");
	template[9] = loadImage("./assets/template10.png");
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
	if (dimRect == 10) {
		start = false;

		background(myBackground);
		imageMode(CENTER);
		imageChoice = floor(random(0, 9));
	 	image(template[imageChoice], 0, 0, template[imageChoice].width/2 + 100, template[imageChoice].height/2 + 100);

		button2 = createButton('click to write your name');
		button2.style('font-size', '20px');
		button2.style('font-family', 'Rye');
		button2.style('background-color', 'none');
		button2.style('color', 'grey');
		button2.size(300,-80);
		button2.position(width/2 - 150, 220);
		button2.mousePressed(writeName);

  		scale(-1, 1);
  		image(myCapture, 0, 0, myCapture.width/3, myCapture.height/3);
	}
	}	
}

function change() {
	start = true;
}
function writeName() {
	button2.remove();
	input = createInput();
		 input.position(width/2 - 150, 220);
		 input.size(300, 20)
}

function keyPressed() {
	if (keyCode === ENTER) {
		console.log("yes");
		let name = input.value();
		button2.html(name);
		input.value('');
		fill("black");
		//textSize(20);
		textStyle(ITALIC);
		text(name, 0, -100);
		input.hide();
	}
}