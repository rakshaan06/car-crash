var car , wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(2000,1000);
  car = createSprite(50, 500, 50, 50);
  wall = createSprite(1500,500,60,height/2);
  wall.shapeColor = "grey";
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);
  car.velocityX = speed;  

  colliding();
  if(isTouching(car,wall)){
    speed=0;
    
    if(deformation < 100){
      car.shapeColor = "green";
    }
    if(deformation >100 && deformation <180){
      car.shapeColor = "yellow";
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }
  drawSprites();
}

