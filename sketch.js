var soldier,soldierImg,soldierFall,soldierJump;
var ground,backGround,backgroundImg;
var gameState = 0;
var sipahi,sipahiImg;
var elite,eliteImg;
var bullet,bulletImg;
var rock,rockImg;

function preload(){
 soldierImg = loadAnimation("images/Soldier/Soldier 1.png",
              "images/Soldier/Soldier 2.png",
              "images/Soldier/Soldier 3.png",
			  "images/Soldier/Soldier 4.png","images/Soldier/Soldier 5.png");			  

soldierFall = loadAnimation("images/Soldier Fall/SoldierF1.png",
            "images/Soldier Fall/SoldierF2.png","images/Soldier Fall/SoldierF3.png",
			"images/Soldier Fall/SoldierF4.png","images/Soldier Fall/SoldierF5.png",
			"images/Soldier Fall/SoldierF6.png","images/Soldier Fall/SoldierF7.png",
			"images/Soldier Fall/SoldierF8.png" );
 
/*soldierJump = loadAnimation("images/Soldier Jump/Soldier J 1.png",
            "images/Soldier Jump/Soldier J 2.png","images/Soldier Jump/Soldier J 3.png",
			"images/Soldier Jump/Soldier J 4.png","images/Soldier Jump/Soldier J 5.png");	*/
			
backgroundImg = loadImage("images/Soldier Background.jpg");

eliteImg = loadAnimation("images/Elite/Elite1.png","images/Elite/Elite2.png","images/Elite/Elite3.png",
          "images/Elite/Elite4.png","images/Elite/Elite5.png","images/Elite/Elite6.png");

bulletImg = loadImage("images/Bullet.png");       

rockImg = loadImage("images/Rock.png");
}

function setup() {
	createCanvas(800, 500);


	

	//Create the Bodies Here.

	backGround = createSprite(400,250,800,500);
	backGround.addImage("path",backgroundImg);
	backGround.scale = 6;
	backGround.velocityX = -4;

    soldier = createSprite(300,420,10,10);
	soldier.addAnimation("soldier",soldierImg);
	soldier.addAnimation("soldier1",soldierJump);
	soldier.scale = 0.5;

   /* elite = createSprite(700,420,10,10);
    elite.addAnimation("elite",eliteImg);
    elite.scale = 0.5;
    elite.velocityX = -0.5;*/

	ground = createSprite(400,495,800,10);
    ground.shapeColor = color(66, 51, 25);

   /* bullet = createSprite(310,420,2,2);
    bullet.addImage("bullet",bulletImg);
    bullet.scale = 0.3;*/
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(backGround.x<0){
   backGround.x = backGround.width/2;
  }

  if(keyDown("space") && soldier.y>325){
   //soldier.changeAnimation("soldier1");
   soldier.velocityY = -5;
  // soldier.scale = 1.4;
  }
  //soldier.scale = 0.35;
  soldier.velocityY = soldier.velocityY+0.5;
  //soldier.changeAnimation("soldier");
  soldier.collide(ground);
  drawSprites();
 
}



