var rect1,rect2;
var car1,car2;
var edges;

function setup() {
  createCanvas(1200,800);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="green";
  
  rect2=createSprite(200,200,50,50);
  rect2.shapeColor="green";
 
  car1 = createSprite(100,100,50,50);
  car1.shapeColor = "red";
  car1.velocityX=5;

  car2 = createSprite(1100,100,50,50);
  car2.shapeColor = "red";
  car2.velocityX=-5;

  edges = createEdgeSprites();
}

function draw() {
  background(255,255,255);
  rect2.x=mouseX
  rect2.y=mouseY 
 
if (isTouching(rect2,car2)){

  car2.shapeColor="blue";
  rect2.shapeColor="blue";
} 
else {
car2.shapeColor="red";
rect2.shapeColor="green";
}

bounceOff(car1,car2);


car1.bounceOff(edges);
car2.bounceOff(edges);

drawSprites();
}





