const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bgImg;

var floor;

var tower;

var cannon;

var angle;

var cannonBall;


function preload() {
  bgImg=loadImage("assets/background.gif")
}
function setup() {
  createCanvas(1200,600);


  engine=Engine.create();
  world=engine.world;

  angle=-PI/8;

  tower= new Tower(150,350,160,310);
  floor= new Ground(600,590,1200,10);
  cannon= new Cannon(160,130,130,100,angle);
  cannonBall=new CannonBall(cannon.x,cannon.y);
}

function draw() 
{
  background(bgImg);

  
  tower.display();
  floor.display();
  cannon.display();
  cannonBall.display();
}

function keyPressed(){
  if(keyCode==32){
    cannonBall.shoot();
  }
}

