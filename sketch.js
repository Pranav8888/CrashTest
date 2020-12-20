var car, wall;
var speed, weight;
var deformation, crash;

function setup() {
  createCanvas(800,400);
  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));
  
  car = createSprite(170, 200, 50, 50);
  wall = createSprite(575, 200, 50, height/2);

  wall.shapeColor = 'black';

}

function draw() {
  background(255,255,255);

  car.velocityX = speed;

  if (wall.x - car.x < (car.width + wall.width)/2) {
    
    //deformation
    deformation = 0.5*speed*speed*weight/22509;
    
    //Velocity back to 0.
    car.velocityX = 0;
    car.x = wall.x - 40;
    
    if (deformation > 180) {
      car.shapeColor = 'red';
      crash = 'RED; Lethal!';  
    } else if (deformation < 180 && deformation > 100){
      car.shapeColor = 'yellow';
      crash = 'YELLOW; Average!';
    } else if (deformation < 100) {
      car.shapeColor = 'green';
      crash = 'Green; Good!';
    }
    textSize(18);
    fill("blue");
    text('Brutality of crash: ' + crash, 50, 50);
    text('Weight: ' + weight + 'kgs', 50, 75)
    text('Speed: ' + speed + 'mph', 50, 100)
  }
  
  drawSprites();
}