var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;

  wall = createSprite(1500, 200, thickness, height/2);
  
}

function draw() {
  background(0);
  bullet.color = "white";
  wall.color = "white";

  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
   && wall.x - bullet.x < wall.width/2 + bullet.width/2) {
 
      bullet.velocityX = bullet.velocityX * (-1);
      wall.velocityX = wall.velocityX * (-1);
}
 if (bullet.y - wall.y < wall.height/2 + bullet.height/2
  && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
 
     bullet.velocityY = bullet.velocityY * (-1);
     wall.velocityY = wall.velocityY * (-1);
 }
  
  if (wall.x - bullet.x < (bullet.width+wall.width)/2 )
  {
     bullet.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22509;
     
     if (deformation>180)
     {
        bullet.shapeColor = color(255, 0, 0);
     }
     if (deformation<180 && deformation>100)
     {
        bullet.shapeColor = color(230, 230, 0);
     }
     if (deformation<180)
     {
        bullet.shapeColor = color(0, 255, 0);
     }
  }
  
  if(hasCollided(bullet, wall))
  {
     bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

      if (damage > 10)
      {
          wall.shapeColor = color(255, 0, 0);
      }

      if (damage < 10)
      {
          wall.shapeColor = color(0, 255, 0);
      }
  }

  drawSprites();
}
function hasCollided (bullet, wall) 
{
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;

   if (bulletRightEdge >= wallLeftEdge) 
   {
      return true;
   }
   return false;
}