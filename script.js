// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
});

var boba = Bodies.circle(400, 100, 20);
var boba2 = Bodies.circle(400, 100, 20);
var boba3 = Bodies.circle(370, 100, 20);
var ground = Bodies.rectangle(400, 450, 120, 15, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boba, boba2, boba3, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
