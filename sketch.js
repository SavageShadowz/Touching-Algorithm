var fixRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(600, 400, 50, 80);
  fixRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixRect.x < fixRect.width/2 + movingRect.width/2 && fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2 && movingRect.y - fixRect.y < fixRect.height/2 + movingRect.height/2 && fixRect.y - movingRect.y < fixRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixRect.shapeColor = "green";
  }
  drawSprites();

}