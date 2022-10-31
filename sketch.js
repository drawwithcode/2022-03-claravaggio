//this sketch is made by Clara Di Bella
//this is a game, everytime you play it the sketch randomly assign you a different poster with different characteristics
//there is an audio that starts when the game gives you the sentence

let button, button2, button3; 
let input;
let myBackground;
let song;
let sToSave;
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

	song = loadSound("./assets/narcos.mp3");
}

function setup() {
	screen = createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	translate(width/2, height/2);
	background("#006666");
	
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
  	button.style('background-color', '#e3691e');
	button.size(300,80);
  	button.position(width/2 - 150, 400);
  	button.mousePressed(change);
}

function draw() {
	noStroke();
	translate(width/2, height/2);
	
	//analizing phase
	if (start == true) {
		button.remove();
		background("#e3691e");
		text("Analizing your face... smile!", 0 ,0);
		push();
		rectMode(CORNER);
		rect(-100, 100, 200, 20);
		fill("#006666");
		rect(-100, 100, dimRect, 20);
		dimRect += 1;
		pop();
	
	//results
	if (dimRect == 200) {
		start = false;

		background(myBackground);
		imageMode(CENTER);

		imageChoice = floor(random(0, 9));
	 	image(template[imageChoice], 0, 0, template[imageChoice].width/2 + 100, template[imageChoice].height/2 + 100);

		button2 = createButton('click to write your name');
		button2.style('font-size', '20px');
		button2.style('font-family', 'Rye');
		button2.style('color', 'grey');
		button2.size(300,-80);
		button2.position(width/2 - 150, 220);
		button2.mousePressed(writeName);

		//I did a button so when you save the screen it will not appear in the image
		button3 = createButton("Press 'S' to save your poster");
		button3.style('font-size', '20px');
		button3.style('font-family', 'Rye');
		button3.style('color', '#08443e');
		button3.size(400,-80);
		button3.position(width/2 - 200, 20);

  		scale(-1, 1);
  		image(myCapture, 0, 0, myCapture.width/3, myCapture.height/3);

		song.play();
	}
	}	
}

function change() {
	start = true;
}

//create the input for the name
function writeName() {
	button2.remove();
	input = createInput();
		 input.position(width/2 - 150, 220);
		 input.size(300, 20)
}

function keyPressed() {
	//write the input when enter is pressed
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

	//save out to a file
	if (key == 's') {
		save('wanted.png');
	  }
}