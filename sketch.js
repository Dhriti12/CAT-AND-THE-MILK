var bg_image,cat,milk;
var bg,catImage,milkImage;
var edge;
var drinkGroup;
var PLAY = 1;
var gameState = PLAY;
var END = 0;
var score;
var timer = 60;

function preload() {
bg_image = loadImage("house.jpg");
catImage = loadImage("marie.png");
milkImage = loadImage("bowlOfMilk.png");
}


function setup() {
createCanvas(600,600);

cat = createSprite(300,550);
cat.addImage(catImage);
cat.scale = 0.1;

edge = createEdgeSprites();

drinkGroup = new Group();

score = 0;

}

function draw() {
  background(bg_image);

  if (gameState === PLAY) {

timer = timer-0.05;
textSize(15);
stroke("white");
text("TIMER REMANING : "+Math.round(timer),400,30);
  text("SCORE : "+score,20,20);

  cat.collide(edge);

    if (keyDown("right")) {
      cat.velocityX = 8;
    }
    
    if (keyDown("left")) {
      cat.velocityX = -8;
    }

    if (keyDown("up")) {
          cat.velocityY = -8;
    }

    if (keyDown("down")) {
          cat.velocityY = 8;
    }

    drinkMilk();

    if (drinkGroup.isTouching(cat)) {
      drinkGroup.destroyEach();
      cat.scale  = cat.scale +0.05;
      score = score+2;
      }

    if (timer<0) {
        gameState = END
    }
    }
    
  if(gameState === END) {
    cat.velocityX = 0;  
drinkGroup.destroyEach();

    }

  drawSprites();
}

function drinkMilk() {
  if (frameCount % 60  === 0) {
milk = createSprite(100,570,5,5);
milk.x = random(50,550);
milk.y = random(100,570);
milk.addImage(milkImage);
milk.scale = 0.1;

milk.lifetime = 30;
drinkGroup.add(milk);
  }
}

