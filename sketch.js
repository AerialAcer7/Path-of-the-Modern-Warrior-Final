var soldier,soldierImg,soldierFall,soldierJump;
var ground,backGround,backgroundImg,backgroundImg2,backgroundImg3;
var gameState = 0;
var sipahi,sipahiImg,sipahiGroup;
var elite,eliteImg,eliteGroup;
var superior,superiorImg;
var bullet,bulletImg,bulletGroup;
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
        
backgroundImg2 = loadImage("images/war.jpg");

backgroundImg3 = loadImage("images/war2.jpg");

}

function setup() {
	createCanvas(800, 500);

	//Create the Bodies Here.

	backGround = createSprite(400,250,800,500);
	backGround.addImage("path",backgroundImg);
  backGround.addImage("war",backgroundImg2);
  backGround.addImage("war2",backgroundImg3);
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
    eliteGroup = new Group();
    sipahiGroup = new Group();
    superGroup = new Group();
    bulletGroup = new Group();
  
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
  
  textSize(20);
  fill(10, 213, 240);
  text("Press Right Arrow for shooting bullets",200,100);
  text("Press Space for jumping",200,125);

  spawnSuperior();
  spawnElite();
  spawnSipahi();
  spawnRocks();



  if(soldier.isTouching(rockGroup)){
   lives = lives-1;   
   rockGroup.destroyEach();
}

if(soldier.isTouching(sipahiGroup)){
  lives = 0;
  sipahiGroup.destroyEach();
}

if(soldier.isTouching(eliteGroup)){
  lives = 0;
  eliteGroup.destroyEach();
}
if(soldier.isTouching(superGroup)){
  lives = 0;
  superGroup.destroyEach();
}

if(bulletGroup.isTouching(sipahiGroup)){
 sipahiGroup.destroyEach();
 backGround.velocityX = backGround.velocityX-1;
 rockGroup.velocityX = backGround.velocityX;
}

if(bulletGroup.isTouching(eliteGroup)){
  eliteGroup.destroyEach();
  backGround.velocityX = backGround.velocityX-1;
  rockGroup.velocityX = backGround.velocityX;
}

if(bulletGroup.isTouching(superGroup)){
  superGroup.destroyEach();
  backGround.velocityX = backGround.velocityX-1;
  rockGroup.velocityX = backGround.velocityX;
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

if(soldier.isTouching(eliteGroup)){
  lives = 0;
  eliteGroup.destroyEach();
}
if(soldier.isTouching(superGroup)){
  lives = 0;
  superGroup.destroyEach();
}

if(bulletGroup.isTouching(sipahiGroup)){
 sipahiGroup.destroyEach();
 backGround.velocityX = backGround.velocityX-1;
 rockGroup.velocityX = backGround.velocityX;
}

if(bulletGroup.isTouching(eliteGroup)){
  eliteGroup.destroyEach();
  backGround.velocityX = backGround.velocityX-1;
  rockGroup.velocityX = backGround.velocityX;
}

if(bulletGroup.isTouching(superGroup)){
  superGroup.destroyEach();
  backGround.velocityX = backGround.velocityX-1;
  rockGroup.velocityX = backGround.velocityX;
}
if(lives == 0){
  gameState = 1;   
 }

 if(keyDown("RIGHT")){
  console.log(bullet); 

  bullet = createSprite(soldier.x+35,soldier.y-25,2,2);
  bullet.addImage("bullet",bulletImg);
  bullet.velocityX = 29;
  bullet.scale = 0.1;
  bulletGroup.add(bullet);
  }
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

  textSize(25);
  fill(0,0,0);
  text("Lives: "+lives,50,50);
  console.log(frameCount); 
  soldier.collide(ground);
}

function spawnRocks(){
  if(frameCount%200 === 0 && frameCount<4000){
   rock = createSprite(790,470,10,10);
   rock.addImage("rock",rockImg);
   rock.scale = 0.37;
   rock.velocityX = -4;
   rockGroup.add(rock);

  }  
}

function spawnSipahi(){
  if(frameCount>500 && frameCount%300 === 0 && frameCount<1500){
   sipahi = createSprite(720,420,10,10);
   sipahi.addAnimation("sipahi",sipahiImg);
   sipahiGroup.add(sipahi);
   sipahi.velocityX = -2;
      
  }  
}

function spawnElite(){
 if(frameCount>1500 && frameCount%270 === 0 && frameCount<3000){
   elite = createSprite(720,420,10,10)
   elite.addAnimation("elite",eliteImg);
   eliteGroup.add(elite);
   elite.velocityX = -3;
   elite.scale = 0.5;
   backGround.changeImage("war");
 }
}

function spawnSuperior(){
  if(frameCount>3000 &&frameCount%250 === 0){
   superior = createSprite(800,410,10,10);
   superior.addAnimation("superior",superiorImg); 
   superGroup.add(superior);
   superior.velocityX = -4;
   superior.scale = 0.95;
   backGround.changeImage("war2"); 
   backGround.scale = 7;                              
  }
}

