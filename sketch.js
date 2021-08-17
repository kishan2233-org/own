var backgroundImage;
var page1;
var startImage, startB;
var playAgain, playAgainImage;

var asteroids;
var asteroidGroup;

var shooter, shooterImage, stone, stoneImage;

var asteroid1, asteroid2, asteroid3;

var invisibleGround;

var firstSound, spaceSound, crashSound, gameOverSound;

var gameState = "start";

function preload()
{
	backgroundImage = loadImage("4.jpg");
    page1 = loadImage("page1.jpg");
	asteroid1 = loadImage("asteroid1.png");
	asteroid2 = loadImage("asteroid2.png");
	asteroid3 = loadImage("asteroid3.png");
	shooterImage = loadImage("shooter.png");
	stoneImage = loadImage("stone.png");
	//start= loadSound("startSound.mp3");
	//spaceSound = loadSound("spaceSound.mp3");
	//crashSound = loadSound("crash.mp3");
	//gameOverSound = loadSound("gameOver.wav");
	startImage = loadImage("start.png");
   playAgainImage = loadImage("playAgain.png");
}

function setup() {

	createCanvas(displayWidth, 650);
	
	startB = createSprite(displayWidth-100, 600);
	startB.addImage("play", startImage);
	startB.scale = 0.5;
	
	shooter = createSprite(displayWidth/2,500);
	shooter.addImage(shooterImage);
	shooter.scale = 1.5;

	


	asteroidGroup = new Group();
}


function draw() {
  rectMode(CENTER);
  background(page1);

  if(gameState === "start"){
  //startSound.play();
  shooter.visible = false;
  startB.visible = true;
	
  textFont("Matura MT Script Capitals");
  fill(255);
  textSize(30);
  text("The Earth is,", 600, 40);
  text("what we all have in common !!!", 490, 75);

  textFont("Imprint MT Shadow");
  text("Defend the earth, from asteroids and save it !!!", 380, 200);

  
  text("Your target: shoot all the asteroids and defend the Earth for 3 minutes....", 30, 600);

  if(mousePressedOver(startB) && gameState === "start"){
	  gameState = "play";
    }
  }
  
else if(gameState === "play"){
	  background(backgroundImage);
	  shooter.visible = true;
	  //startSound.stop();
	  //spaceSound.loop();

	

	if(keyDown(LEFT_ARROW)){
		shooter.x = shooter.x-4;
  }

	  if(keyDown(RIGHT_ARROW)){
		 shooter.x = shooter.x+4;
	  }

	

	

	

	if(keyDown(UP_ARROW)){
		stone = createSprite(displayWidth/2,500, 10, 10);
		stone.x = shooter.x;
	    stone.y = shooter.y;
		shooter.depth = stone.depth;
	    shooter.depth = stone.depth + 1;
		stone.addImage(stoneImage);
		stone.scale = 0.2;
        
		stone.velocityY = -8;
	}

	invisibleGround = createSprite(680,270,displayWidth,10);
	invisibleGround.visible = false;

	startB.visible = false;

	  if (frameCount % 100 === 0) {
		asteroids = createSprite(random(0, 1000), 0, 100, 100);
		asteroids.velocityY = 6;
		asteroids.velocityX = 6;
		var rand = Math.round(random(1,3));
		switch(rand){
			case 1: asteroids.addImage(asteroid1);
			asteroids.scale = 0.6;
			break;
			case 2: asteroids.addImage(asteroid2);
			asteroids.scale = 0.3;
			break;
			case 3: asteroids.addImage(asteroid3);
			asteroids.scale = 0.7;
			break;
		}

		asteroidGroup.add(asteroids);			
   }

   		

		 //if(asteroidGroup.isTouching(stone)){
			//crashSound.play();
			//stone.destroy();
			//arteroidGroup.destroyEach();
			//stone.x = shooter.x;
			//stone.y = shooter.y;
		 //}


		 //if(asteroidGroup.isTouching(invisibleGround)){
			//crashSound.play();
			//stone.destroy();
			//arteroids.destroy();
			//gameOverSound.play();
			//playAgain = createSprite(displayWidth/2, 500);
			//playAgain.addImage(playAgainImage);
		 //}
		 
		 
}
drawSprites();
}