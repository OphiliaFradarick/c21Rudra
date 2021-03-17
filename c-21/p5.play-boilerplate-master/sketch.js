var fixedRect, movingRect, gameObject1, gameObject2, gameObject3, gameObject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject3.debug = true;

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
  gameObject4.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collision(movingRect, gameObject1)){
    movingRect.shapeColor = "yellow";
    gameObject1.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  
  drawSprites();
}

