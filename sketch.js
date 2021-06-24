var  iss, spacecraft;
var hasDocked = false;
var bg;
var ii,s1,s2,s3,s4
var p;
function preload(){
bg = loadImage("spacebg.jpg");
ii = loadImage("iss.png");
s1 = loadImage("spacecraft1.png");
s2 = loadImage("spacecraft2.png");
s3 = loadImage("spacecraft3.png");
s4 = loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
 iss = createSprite(450, 200, 50, 50);
 iss.addImage(ii);
 iss.scale = 0.7

 spacecraft = createSprite(400,300,50,50)
 spacecraft.addImage(s1);
 spacecraft.scale = 0.17;

 p = createSprite(400,220,5,5)
}

function draw() {
  background(bg); 
  
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y-5
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(s2)
      spacecraft.y = spacecraft.y+5
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(s3)
      spacecraft.x = spacecraft.x-5
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(s4)
      spacecraft.x = spacecraft.x+5
    }


  if(spacecraft.y<450){
    textSize(30)
    fill("red")
    text("Docking Succesful !",60,100)
    hasDocked = true;
  }
  


  drawSprites();
}