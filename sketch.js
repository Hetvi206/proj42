var sc,sbg,isspng;
var  iss,spacecraft,hasDocked;
hasDocked=false;


function preload(){

sbg= loadImage("spacebg.jpg");
isspng= loadImage("iss.png");

sc= loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png")
}

function setup() {
  createCanvas(800,600);
  
  iss=createSprite(400,150,50,50);
  iss.addImage("iss",isspng);
  iss.scale=0.7;

  spacecraft=createSprite(380,550,20,20);
  spacecraft.addAnimation("spacecraft",sc);
  spacecraft.scale=0.3;
 
}

function draw() {
  background(sbg);  

/*if(!hasDocked){
  spacecraft.x=random();
}*/

  spacecraft.setCollider("rectangle",0,0,0,0);
  spacecraft.debug=true;
  iss.setCollider("rectangle",0,0,0,0);
  iss.debug=true;
  
if(keyCode===LEFT_ARROW){
spacecraft.x=spacecraft.x-1;
}

if(keyCode===RIGHT_ARROW){
  spacecraft.x=spacecraft.x+1;
}

if(keyCode===UP_ARROW){
  spacecraft.y=spacecraft.y-1;
}

if(keyCode===DOWN_ARROW){
  spacecraft.y=spacecraft.y+1;
}

if(spacecraft.isTouching(iss)){
  hasDocked=true;
  spacecraft.collide(iss);
}

if(hasDocked===true){
  fill("wehite");
  textSize(20);
  text("Docking Successful!",400,300);
}

  drawSprites();
}