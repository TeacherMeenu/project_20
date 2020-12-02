var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200,200,60,height/2);
  car = createSprite(50,200,75,50);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

  deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background(255,255,255); 
  
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
  }
  if (deformation<100){
    car.shapeColor = "purple";
    wall.shapeColor = "Purple";
  }
  if (deformation>100 && deformation<180){
    car.shapeColor = "green";
    wall.shapeColor = "green";
  }
  if (deformation>180){
    car.shapeColor = "red";
    wall.shapeColor ="yellow";
  }

  drawSprites();
}
