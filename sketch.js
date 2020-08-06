const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof,world;

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,150,400,40);
	bob1 = new Bob(450,450,60);
	bob2 = new Bob(510,450,60);
	bob3 = new Bob(570,450,60);
	bob4 = new Bob(630,450,60);
	bob5 = new Bob(690,450,60);
	


	rope1 = new Rope(bob1.body,roof.body,-60*2,0);
	rope2 = new Rope(bob2.body,roof.body,-60,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,60,0);
	rope5 = new Rope(bob5.body,roof.body,60*2,0);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(215);
  
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300});
	}
}



