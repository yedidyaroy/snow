var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var backgroundImg;
var snowBoy,snowBoyImg;
var snow=[];
function preload() {
  backgroundImg=loadImage("morning_big.jpg");
  snowBoyImg=loadImage("snowboy.png");
}

function setup() {
  createCanvas(800,400);
  snowBoy= createSprite(500, 300, 50, 50);
  snowBoy.addImage(snowBoyImg);
  snowBoy.scale=0.4;
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);
  drawSprites();
  Engine.update(engine);
  ground.display();
  if (frameCount%60===0){
     snow.push(new Snow(random(width/2-10,width/2+10),10,10));
   }
   for (var t = 0; t<snow.length; t++){
    snow[t].display();
  }
  
}