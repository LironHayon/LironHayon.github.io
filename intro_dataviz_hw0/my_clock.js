
function setup() {
	createCanvas(600, 600);

}



//this gets called every frame (about 60 frames per second)
function draw() {

	background(0);
	fill(255); //text color
	textFont('Tahoma');
	textSize(12)
	text(nf(hour(), 2, 0) + ':' + nf(minute(), 2, 0) + ':' + nf(second(), 2, 0), width / 2 - 30, 15); //print out current time
	textSize(20)
	text("The Rabbit and the Turtule Race!", 160, 60);
	//fill(255);
	//textFont('Tahoma');
	//text("The Rabbit and the Turtule Race! ", 100, 100);
	
	//seconds = rabbit
	noStroke();
	fill(255);//line of seconds
	rect(0, 500, map(second(), 0, 60, 0, width), 10); 

	fill(255); //bunny head
	rect(map(second(), 0, 60, 0, width) - 50, 460, 50, 50);

	fill(0); //eye
	ellipse(map(second(), 0, 60, 0, width)-15, 480, 15, 15);
	fill(255); //eye
	ellipse(map(second(), 0, 60, 0, width) - 15, 480, 5, 5);

	fill(0); //eye
	ellipse(map(second(), 0, 60, 0, width) - 35, 480, 15, 15);
	fill(255); //eye
	ellipse(map(second(), 0, 60, 0, width) - 35, 480, 5, 5);

	fill(255); //ear
	ellipse(map(second(), 0, 60, 0, width) - 10, 450, 15, 45);


	fill(255); //ear
	ellipse(map(second(), 0, 60, 0, width) - 35, 450, 15, 45);

	fill(233, 102, 247); //nose
	triangle(map(second(), 0, 60, 0, width) - 25, 490, map(second(), 0, 60, 0, width) - 25, 500, map(second(), 0, 60, 0, width) - 20, 500);


	//minutes = turtule
	fill(39, 110, 18); //line of minutes
	rect(0, 300, map(minute(), 0, 60, 0, width), 10); 

	fill(39, 110, 18); //body
	rect(map(minute(), 0, 60, 0, width) - 80, 260, 50, 50);

	fill(42, 92, 27); //dots on body
	rect(map(minute(), 0, 60, 0, width) - 70, 260, 15, 10);
	rect(map(minute(), 0, 60, 0, width) - 60, 280, 10, 10);
	rect(map(minute(), 0, 60, 0, width) - 80, 290, 10, 10);
	rect(map(minute(), 0, 60, 0, width) - 40, 280, 10, 15);
	rect(map(minute(), 0, 60, 0, width) - 40, 260, 10, 10);

	fill(62, 151, 35); //head
	rect(map(minute(), 0, 60, 0, width) - 30, 270, 30, 30);

	fill(0); //eye
	ellipse(map(minute(), 0, 60, 0, width) - 10, 280, 10, 10);
	fill(255); //eye
	ellipse(map(minute(), 0, 60, 0, width) - 10, 280, 3, 3);

	fill(0); //eye
	ellipse(map(minute(), 0, 60, 0, width) - 25, 280, 10, 10);
	fill(255); //eye
	ellipse(map(minute(), 0, 60, 0, width) - 25, 280, 3, 3);

	fill(0); //nose
	triangle(map(minute(), 0, 60, 0, width) - 15, 285, map(minute(), 0, 60, 0, width) - 15, 295, map(minute(), 0, 60, 0, width) - 20, 295);


	//hours = rounds
	fill(243, 104, 243);
	rect(230, 100, 150, 100);

	fill(242, 183, 242);
	rect(230, 150, 150, 50);

	fill(243, 104, 243);
	rect(230, 150, 5, 50);
	rect(375, 150, 5, 50);
	rect(230, 195, 150, 5);

	fill(255);
	textSize(32)
	text("ROUND", 253, 140);
	textSize(33)
	text(" #" + hour(), 265, 185)

}




