const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bgImg,img;

var engine,world;

function preload(){
  bgImg = loadImage("snow3.jpg");
 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow1 = new Snow(200,50,50,50);
  snow2 = new Snow(250,50,50,50);
  snow3 = new Snow(300,50,50,50);
  snow4 = new Snow(130,50,50,50);
  snow5 = new Snow(680,50,50,50); 
  snow6 = new Snow(550,50,50,50);
  snow7 = new Snow(610,50,50,50);
  snow8 = new Snow(220,50,50,50);
  snow9 = new Snow(700,50,50,50);
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  snow1.display();
  snow2.display(); 
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();


 
  drawSprites();  
}