var canvas;
var monkey, monkeyImg;
var bgdImg;
var bgd;
var yes, yesImg;
var times;
var rockImg;
function preload(){
monkeyImg = loadImage("pic.png");
bgdImg = loadImage("final.jpg");
yesImg = loadImage("YES.jpg");
rockImg = loadImage("rocks.png")
}

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  
  monkey = createSprite(820,500,10,10);
  monkey.addImage("weber", monkeyImg);
  monkey.scale = 0.3;

  
  
}

function draw(){
  
  background(0);
  image(bgdImg,-displayWidth*4,0, displayWidth*5, displayHeight);
  
  
  //console.log(bgd.x);
  if(keyDown(LEFT_ARROW)){
monkey.velocityX =  - 2; 

}
  console.log(monkey.x);
  camera.position.x = monkey.x;
camera.position.y = displayHeight/2;

for(var i = 0; i <= 1000000 ; i=i +50 ){
image(rockImg, 0,200,20,20);
}


  drawSprites();
}