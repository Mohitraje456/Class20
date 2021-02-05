
var zain 
var Mohitraje


function setup() {
  createCanvas(800,400);
  zain = createSprite(100,100,80,30)
  zain.shapeColor = "blue";
 Mohitraje= createSprite (200,200,60,120)
 Mohitraje.shapeColor ="red"
 
}

function draw() {
  background("black");  

  zain.y = World.mouseY
  
  zain.x = World.mouseX

 if ( zain.x - Mohitraje.x   <  zain.width/2 + Mohitraje.width/2    
  && Mohitraje.x - zain.x   <  zain.width/2 + Mohitraje.width/2
  && zain.y - Mohitraje.y   <  zain.height/2 + Mohitraje.height/2
  && Mohitraje.y- zain.y  <  zain.height/2 + Mohitraje.height/2 
  
  
  
  
  ){

  zain.shapeColor = "green";
  Mohitraje.shapeColor ="green"


 }else {

  zain.shapeColor = "blue"
  Mohitraje.shapeColor ="red"


 }





  drawSprites();
}