const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    


    box1 = new Box(200,300,50,199);
    
    
    box2=new Box(150,300,50,300);
    box3=new Box(100,300,50,200);
    box4=new Box(250,300,50,400);
    box5=new Box(50,300,50,400);

    box6=new Box(1000,300,50,200);
    box7=new Box(950,300,50,300);
    box8=new Box(900,300,50,200);
   box9=new Box(850,300,50,400);
   box10=new Box(1050,300,50,400);

   box11=new Box(600,390,300,50);

   box12=new Box(450,300,50,200);

   box13=new Box(750,300,50,200);

   box14=new Box(600,220,50,300);
   box15=new Box(650,270,50,200);
   box16=new Box(550,270,50,200);

   box17=new Box(500,350,50,100);
   box18=new Box(700,350,50,100);

   box19=new Box(450,100,50,200);
    box20=new Box(750,100,50,200);

    box21=new Box(350,300,150,50);

    

}

function draw(){
    background(0);

    
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
}