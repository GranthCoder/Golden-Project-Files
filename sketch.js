var play,close,bgImg,bgMusic,storyPanel,storyImg,story,MissionMusic,playButton,SoldierbgImg,buttonImg,SoldierINV,mobSoldierImg,
arrow,arrowImg,soldierImgLeft,edges;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var hallway1,hallway2,hall1Img,hall2Img;

var enemy1,enemy2,enemy3,enemy4,enemyImg,enemyGroup,enemyImgRight;
var gun,mobile;
var lab,secRoom,weapons,labImg,secImg,weaponsImg
var gameState = 0;


function preload(){
    storyImg = loadImage("images/mission.PNG");
    soldierImg = loadImage("images/gunSoldier.png");
    bgImg = loadImage("images/soldier bg img.PNG");
    buttonImg = loadImage("images/playButton.png");
    MissionMusic = loadSound("Mission Sound.mp3");
    mobSoldierImg = loadImage("images/mobile soldier.png");
    arrowImg = loadImage("images/player pointer.png");
    soldierImgLeft = loadImage("images/gunSoldierLeft.png");
    enemyImg = loadImage("images/enemySoldier.png");
    enemyImgRight = loadImage("images/enemySoldierRight.png")
    labImg = loadImage("images/researchLab.png");
    secImg = loadImage("images/securityRoom.jpg");
    weaponsImg = loadImage("images/weapon room.jpg");
    hall1Img = loadImage("hallway.jpg");
    hall2Img = loadImage("hallway.jpg");
}

function setup(){
  createCanvas(displayWidth-30,displayHeight-30);
  edges = createEdgeSprites();
  storyPanel = createSprite(displayWidth/2,displayHeight-20,displayWidth/2+200,displayHeight/2-20);
  storyPanel.shapeColor = "white";
  storyPanel.velocityY = -5;

  playButton = createSprite(displayWidth/2,displayHeight/2-20,50,30);
  playButton.addImage(buttonImg);
  playButton.scale = 0.25;
  playButton.visible = false;

  enemyGroup = createGroup();
  //hallway1 = createSprite((displayWidth-30)/2,(displayHeight-30)/2);
  //hallway1.addImage(hall1Img)

  secRoom = createSprite(displayWidth-275,displayHeight/2-275);
  secRoom.addImage(secImg);
  secRoom.scale = 0.75;
  secRoom.visible = false;

  weapons = createSprite(185,displayHeight/2-300);
  weapons.addImage(weaponsImg);
  weapons.scale = 0.35;
  weapons.visible = false;

  lab = createSprite(240,displayHeight-210);
  lab.addImage(labImg);
  lab.scale = 1.1;
  lab.visible = false;

  Soldier = createSprite(displayWidth-250,height/2+250,50,75);
  Soldier.addImage(soldierImg);
  Soldier.scale = 0.20;
  Soldier.setCollider("circle",0,0,250)
  Soldier.visible = false;
  Soldier.debug = true;

  arrow = createSprite(Soldier.x-20,Soldier.y-75);
  arrow.addImage(arrowImg);
  arrow.scale = 0.05;
  arrow.visible = false;


  walls();
  createEnemies();
  
  //gun = createSprite(Soldier.x+5,Soldier.y);
  //gun.shapeColor = "red";
  //gun.visible = false;


  //mobile = createSprite(Soldier.x+5,Soldier.y);
  //mobile.shapeColor = "green";
  //mobile.visible = false;
}

function draw(){
  if (gameState===0){
    //MissionMusic.play();
    //MissionMusic.amp(0.2);
    background(bgImg);
    storyPanel.addImage(storyImg);
    if(storyPanel.y<0){
      playButton.visible = true;
      if(mousePressedOver(playButton)){
        gameState=1;
      }
    }
  }

  if(gameState===1){
    background(0);

    if(!enemy1.visible){
      setEnemy();
    }
    storyPanel.visible = false;
    playButton.visible = false;
    Soldier.visible = true;
    arrow.visible = true;
    secRoom.visible = true;
    weapons.visible = true;
    lab.visible = true;
    wallVis(); 
    enemyVis();
    

    arrow.x = Soldier.x-20;
    arrow.y = Soldier.y-75;


    soldCollide();
    enemyAttack();
    
    //gun.x = Soldier.x+5;
    //gun.y = Soldier.y;
    //gun.visible = true;

    //mobile.x = Soldier.x+5;
    //mobile.y = Soldier.y;gun.x = Soldier.x+5;

    //camera.position.x = Soldier.x;
    //camera.position.y = Soldier.y;
  
   
    KEYDOWN();
    keyUP(); 
  }

drawSprites();
}

