const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var carl
var plane

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

carl = new Player(50,300,50,50);
plane = new Ground(400,390,800,100);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  carl.display();
  plane.display();

}

