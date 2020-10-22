
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var drops = [];
var lightning;
var lightningGroup;

function preload() {
    lightning1_img = loadImage("images/1.png");
    lightning2_img = loadImage("images/2.png");
    lightning3_img = loadImage("images/3.png");
    lightning4_img = loadImage("images/4.png");

}
function setup() {
    createCanvas(500, 600);
    
	engine = Engine.create();
    world = engine.world;
    
    for(var i = 0; i >= 0; i++) {
        drops.push(new Drop(random(50,450), random(50,450)))

    }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  for(var j = 0; j < drops.length; j++) {
    drops[i].display();
  }
  
  drawSprites();
 
}

function lightning() {
    if(frameCount % 20 === 0) {
        lightning = createSprite(150,20,40,40);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: lightning.addImage("lightning1",lightning1_img);
            break;
            case 2: lightning.addImage("lightning2", lightning2_img);
            break;
            case 3: lightning.addImage("lightning3", lightning3_img);
            break;
            case 4: lightning.addImage("lightning4", lightning4_img);
            break;
        }
        lightningGroup.add(lightning);
        lightning.lifeTime = 10; 
    }
}
