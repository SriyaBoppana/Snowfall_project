const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var snowfall=[];
var maxDrops=100
function preload(){
  bgImage=loadImage("snow3.jpg")
  snowimage=loadImage("snow5.webp")
  
}

function setup() {
  createCanvas(1200,800);
 engine=Engine.create();
 world=engine.world;
 if(frameCount%80===0){
   for (var i=0; i<maxDrops; i++){
     snowfall.push(new Snowfall(random(0,1200),10))
   }
 }
}

function draw() {
  background(bgImage); 
  Engine.update(engine)
  for (var i=0; i<maxDrops; i+=50){
    snowfall[i].display();
    snowfall[i].updateY();
  } 
  drawSprites();
}
