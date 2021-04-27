var soldier,soldierImg,soldierFall,soldierJump;
var ground,backGround,backgroundImg,backgroundImg2,backgroundImg3;
var gameState = 0;
var sipahi,sipahiImg,sipahiGroup;
var elite,eliteImg;
var superior,superiorImg;
var bullet,bulletImg;
var rock,rockImg,rockGroup;
var lives = 3;

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

sipahiImg = loadAnimation("images/Sipahi/Soldier1.png","images/Sipahi/Soldier2.png",
           "images/Sipahi/Soldier3.png","images/Sipahi/Soldier4.png","images/Sipahi/Soldier5.png");

superiorImg = loadAnimation("images/Superior/Superior.png","images/Superior/Superior2.png",
             "images/Superior/Superior3.png","images/Superior/Superior4.png",
             "images/Superior/Superior4.png","images/Superior/Superior6.png");
        
//backgroundImg2 = loadImage()

//backgroundImg3 = loadImage()
}

function setup() {
	createCanvas(800, 500);


	

	//Create the Bodies Here.

	backGround = createSprite(400,250,800,500);
	backGround.addImage("path",backgroundImg);
	backGround.scale = 6;
	backGround.velocityX = -4;

    soldier = createSprite(175,420,10,10);
	soldier.addAnimation("soldier",soldierImg);
//	soldier.addAnimation("soldier1",soldierJump);
    soldier.addAnimation("soldierFall",soldierFall);
	soldier.scale = 0.4;

   /* elite = createSprite(700,420,10,10);
    elite.addAnimation("elite",eliteImg);
    elite.scale = 0.5;
    elite.velocityX = -0.5;*/

	ground = createSprite(400,495,800,10);
    ground.shapeColor = color(66, 51, 25);

   /* bullet = createSprite(310,420,2,2);
    bullet.addImage("bullet",bulletImg);
    bullet.scale = 0.3;*/

    rockGroup = new Group();

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites(); 

  if(gameState == 0){
  if(backGround.x<0){
   backGround.x = backGround.width/2;
  }

  if(keyDown("space") && soldier.y>320){
   //soldier.changeAnimation("soldier1");
   soldier.velocityY = -5;
  // soldier.scale = 1.4;
  }
  //soldier.scale = 0.35;
  soldier.velocityY = soldier.velocityY+0.5;
  //soldier.changeAnimation("soldier");
}
  soldier.collide(ground);

  if(soldier.isTouching(rockGroup)){
   lives = lives-1;   
   rockGroup.destroyEach();
}

if(soldier.isTouching(sipahiGroup)){
  lives = 0;
  sipahiGroup.destroyEach();
}

  if(lives == 0){
   gameState = 1;   
  }

  if(gameState == 1){
   backGround.x = backGround.width/2;
   backGround.velocityX = 0;  
   soldier.changeAnimation("soldierFall");
   soldier.scale = 3;
   rockGroup.destroyEach();
   textSize(100);
   fill("red");
   text("GAME OVER",100,250); 
  }
  spawnSipahi();
  spawnRocks();
  textSize(25);
  fill(0,0,0);
  text("Lives: "+lives,50,50);
  console.log(frameCount);  
}

function spawnRocks(){
  if(frameCount%300 === 0){
   rock = createSprite(790,470,10,10);
   rock.addImage("rock",rockImg);
   rock.scale = 0.37;
   rock.velocityX = -4;
   rockGroup.add(rock);

  }  
}

function spawnSipahi(){
  if(frameCount>500 && frameCount%300 === 0){
   sipahi = createSprite(480,420,10,10);
   sipahi.addAnimation("sipahi",sipahiImg);
   sipahiGroup.add(sipahi);
      
  }  
}

function mousePressed(){
  
}

