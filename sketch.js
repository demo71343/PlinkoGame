const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particle = [];
var plinko = [];
var division = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 780, 480, 20);

  for (var i = 0; i < 480 ;i=i+80){
    division.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
}

for (var i = 40; i < 480 ;i=i+50){
  plinko.push(new Plinko(i,75));
}

for (var i = 15; i < 470 ;i=i+50){
  plinko.push(new Plinko(i,175));
}
    

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  
  for (var i = 0; i < division.length ;i++){
    division[i].display();
  }

  for (var i = 0; i < plinko.length ;i++){
    plinko[i].display();
  }

  for (var i = 0; i < plinko.length ;i++){
    plinko[i].display();
  }

  if(frameCount %60 === 0 ){
    particle.push(new Particle(random(width/2-20,width/2+20), 10,10))
  }

  for (var i = 0; i < particle.length ;i++){
    particle[i].display();
  }

  drawSprites();
}