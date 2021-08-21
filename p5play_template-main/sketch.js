function preload(){
trexi=loadAnimation("trex1.png","trex3.png","trex4.png")
groundi=loadImage("ground.png")

}




function setup() {
  createCanvas(600,200);
  trexi.frameDelay=2
  trex=createSprite(50, 165)
  trex.addAnimation("trexrun",trexi)
  trex.scale=0.5
  ground1=createSprite(300, 190, 600, 15)
  ground1.addImage(groundi)
  
}

function draw() 
{
  background("lightblue");
  trex.collide(ground1)
  ground1.velocityX=-4

if (ground1.x<0){
 ground1.x=600
}
if (keyDown("space")){
trex.velocityY=-15

}
trex.velocityY=trex.velocityY+0.8
  drawSprites()

}




