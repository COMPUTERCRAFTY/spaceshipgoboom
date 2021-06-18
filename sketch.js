
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player,player_img,invg,projectile;


var sprite

function setup() {
	createCanvas(400, 600);


	engine = Engine.create();
	world = engine.world;

    player = new Player(390,580,150,150)
    Engine.run(engine);
   projectile=new Projectile(player.body.position.x,player.body.position.y,100,150)
   invg = new Invground(100,600,700,20)
  

 
  
}


function draw() {
  background(225); 
  player.display();
 invg.display();
 projectile.display();


  keyPressed()
  drawSprites()
}
function keyPressed()
{
   if(keyCode === RIGHT_ARROW)
   {
    Matter.Body.applyForce(player.body, player.body.position,{x:0.5,y:0})
   }
   if(keyCode === LEFT_ARROW)
   {
	   Matter.Body.applyForce(player.body, player.body.position,{x:-0.5,y:0})
   }
}


