const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella, umbrellaImage;
var drops = [];
var maxDrops = 150;

function preload(){
   umbrellaImage = loadImage("images/walkingFrame/walking1.png");

   lightning1 = loadImage("images/thunderbolt/1.png");
   lightning2 = loadImage("images/thunderbolt/2.png");
   lightning3 = loadImage("images/thunderbolt/3.png");
   lightning4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(400, 800);
   engine = Engine.create();
   world = engine.world;

   umbrella = createSprite(200, 650, 50, 40);
   umbrella.addImage(umbrellaImage);
   umbrella.scale = 0.4;

   umbrella = new Umbrella(200, 600, 75);

   for(var i = 0; i < maxDrops; i++){
      drops.push(new Drops(random(0, 400), random(0, 400), 3))
   }
}

function draw(){
   background("black");
   Engine.update(engine);

   for(var m = 0; m < drops.length; m++){
      drops[m].display();
      drops[m].ud();
   }

   createLightning();
   drawSprites();
   umbrella.display();
}

function createLightning(){
   //spawns the lightnings randomly
   if (frameCount % 111 === 0){
    var lightning = createSprite(200,100,100,100);
    
     //generate random lightnings
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: lightning.addImage(lightning1);
               break;
       case 2: lightning.addImage(lightning2);
               break;
       case 3: lightning.addImage(lightning3);
               break;
       case 4: lightning.addImage(lightning4);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the lightning           
     lightning.scale = 0.5;
     lightning.lifetime = 11;
    
  }
 }