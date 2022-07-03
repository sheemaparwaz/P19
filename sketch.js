var skyImg, sky;
var sonic, SonicImg, jumping_sonic
var platform, platformImg, platformGroup

function preload(){
    skyImg = loadImage("Picture 1.png");
    SonicImg = loadImage("Sonic -1.png");
    jumping_sonic = loadImage("Jumping sonic 2.png")

    platformImg = loadImage("clip.png");}

function setup() {
    createCanvas(800,600)

    sky = createSprite(300,300);
    sky.addImage("sky",skyImg);
    sky.velocityY = 2;
  
    sonic = createSprite(300,300)
    sonic.addImage("sonic",SonicImg);
    sonic.scale=0.18 
    //sonic.debug=true
    sonic.setCollider("rectangle",0,0,125,sonic.height)

    platformGroup=new Group()

}

function draw() {
    if(sky.y > 600){
    sky.y = 0
  }

  if(keyDown("space")){
    sonic.changeAnimation("sonicjumping",jumping_sonic) 
    sonic.velocityY=-13
  }

  if(keyDown("left_arrow")){
    sonic.x=sonic.x+-3
  }

  if(keyDown("right_arrow")){
    sonic.x=sonic.x+3
  }

  if(platformGroup.isTouching(sonic)){
    sonic.velocityY=0
   }

  sonic.velocityY=sonic.velocityY+0.8

    spawnPlatform()
    drawSprites()
}

function spawnPlatform(){
    if(frameCount%200===0){
      platform = createSprite(300,-50)
      platform.addImage("platform",platformImg);
      platform.scale=0.3
    
      platform.x=Math.round(random(120,400))
      platform.velocityY=3
      platform.lifetime=600/3
      sonic.depth=platform.depth
      sonic.depth=sonic.depth+1
  
      platformGroup.add(platform)
  
     sonic.lifetime=600/3
     platform.lifetime=600/3
    }
  
  }