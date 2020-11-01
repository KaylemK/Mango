
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree,boy,slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(500,400,10,10);
boy = new Boy(100,600);
slingshot = new Slingshot(boy.body,{x:200,y:630});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  boy.display();
  slingshot.display();
  drawSprites();
 
}



