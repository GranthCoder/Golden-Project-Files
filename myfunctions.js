function KEYDOWN(){
    if(keyDown("d")){
      Soldier.setVelocity(5,0);
      Soldier.addImage(soldierImg);
    }
    if(keyDown("a")){
      Soldier.setVelocity(-5,0);
      Soldier.addImage(soldierImgLeft);
    }
    if(keyDown("w")){
      Soldier.setVelocity(0,-5);
    }
    if(keyDown("s")){
      Soldier.setVelocity(0,5);
    }
  
    if(keyDown("1")){
      Soldier.addImage(soldierImg);
    }
    if(keyDown("2")){
      Soldier.addImage(mobSoldierImg);
    }
  }
  
  function keyUP(){
    if(keyWentUp("d")){
      Soldier.setVelocity(0,0);
    }
    if(keyWentUp("a")){
      Soldier.setVelocity(0,0);
    }
    if(keyWentUp("w")){
      Soldier.setVelocity(0,0);
    }
    if(keyWentUp("s")){
      Soldier.setVelocity(0,0);
    }
  }
  
  function walls(){
    
    wall1 = createSprite(displayWidth-250,height/2+100,450,20)
    wall2 = createSprite(displayWidth-250-450/2-5,displayHeight/2+150,20,150)
  
    wall3 = createSprite(displayWidth-250,height/2-100,540,20);
    wall4 = createSprite(displayWidth-250-450/2-5-50,displayHeight/2-180,20,150);
  
    wall5 = createSprite(250,height/2+50,500,20);
    wall6 = createSprite(490,height/2+150,20,200);
  
    wall7 = createSprite(200,height/2-150,400,20);
    wall8 = createSprite(400,height/2-360,20,125);
  
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
  }
  function soldCollide(){
    Soldier.collide(wall1);
    Soldier.collide(wall2);
    Soldier.collide(wall3);
    Soldier.collide(wall4);
    Soldier.collide(wall5);
    Soldier.collide(wall6);
    Soldier.collide(wall7);
    Soldier.collide(wall8);
    Soldier.collide(edges);
  }
  
  function wallVis(){
  
    wall1.visible=true;
    wall2.visible=true;
    wall3.visible=true;
    wall4.visible=true;
    wall5.visible=true;
    wall6.visible=true;
    wall7.visible=true;
    wall8.visible=true;
  }
  
  function createEnemies(){
  
    
  
    enemy1 = createSprite(width/2,100);
    enemy1.addImage(enemyImg);
    
    enemy1.scale = 0.25;
    enemy1.visible = false;
    enemy1.debug = true;
    enemy1.setCollider("rectangle",0,0,500,500);
    //enemy1.setVelocity(random(-5,5),random(-5,5));
    enemy2 = createSprite(width-100,height/2);
    enemy2.addImage(enemyImg);
    //enemy2.setVelocity(random(-5,5),random(-5,5));
    enemy2.scale = 0.25;
    enemy2.visible = false;
    enemy2.debug = true;
    enemy2.setCollider("rectangle",0,0,500,500);
  
    enemy3 = createSprite(width/2,height-100);
    enemy3.addImage(enemyImg);
    //enemy3.setVelocity(random(-5,5),random(-5,5));
    enemy3.scale = 0.25;
    enemy3.visible = false;
    enemy3.setCollider("rectangle",0,0,500,500);
  
    enemy4 = createSprite(100,height/2-50);
    enemy4.addImage(enemyImg);
    //enemy4.setVelocity(random(-5,5),random(-5,5));
    enemy4.scale = 0.25;
    enemy4.visible = false;
    enemy4.setCollider("rectangle",0,0,500,500);
  
    //enemyGroup.bounceOff(wall4);
    enemyGroup.add(enemy1);
    enemyGroup.add(enemy2);
    enemyGroup.add(enemy3);
    enemyGroup.add(enemy4);
  
    console.log(enemyGroup)
    
  }
  
  function enemyAttack(){
  
    background(0);
    
    enemyGroup.bounceOff(wall1);
    enemyGroup.bounceOff(wall2);
    enemyGroup.bounceOff(wall3);
    enemyGroup.bounceOff(wall4);
    enemyGroup.bounceOff(wall5);
    enemyGroup.bounceOff(wall6);
    enemyGroup.bounceOff(wall7);
    enemyGroup.bounceOff(wall8);
  
    enemyGroup.bounceOff(edges);
    //enemyGroup.x
  
    // Adjusting the enemy's position according to the soldier's position
    for(var i = 0;i<enemyGroup.length;i++){
  
      if(enemyGroup.get(i).x<Soldier.x){
        enemyGroup.get(i).addImage(enemyImgRight);
      }else{
        enemyGroup.get(i).addImage(enemyImg);
      }
    }
  
    //Condition to attack the soldier
    for(var i = 0;i<enemyGroup.length;i++){
  
    //if(enemyGroup.get(i).isTouching(Soldier) && frameCount%50===0){
      if(enemyGroup.get(i).x-Soldier.x<100 && Soldier.x - enemyGroup.get(i).x<100 && frameCount%50===0){
  
      var  bullet = createSprite(enemyGroup.get(i).x,enemyGroup.get(i).y,50,20);
      bullet.shapeColor = "red";
      bullet.velocityX = 5;
  
      console.log("attack");
  
    }
  }
  
  }
  
  function enemyVis(){
    enemy1.visible = true;
    enemy2.visible = true;
    enemy3.visible = true;
    enemy4.visible = true;
  
    
  }
  
  function setEnemy(){
    enemy1.setVelocity(random(-5,5),random(-5,5));
    enemy2.setVelocity(random(-5,5),random(-5,5));
    enemy3.setVelocity(random(-5,5),random(-5,5));
    enemy4.setVelocity(random(-5,5),random(-5,5));
  }