const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function preload(){
    polygonImg=loadImage("polygon.png");
  }

  
  

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygon=new Polygon(50,200,20)
  //  slingshot = new Slingshot(polygon.body,{x:80,y:200});   
    //ball = Bodies.circle(50,200,20);
    //World.add(world,ball);
  
   // slingshot = new Slingshot(this.ball,{x:100,y:200});
    slingshot = new Slingshot(polygon.body,{x:100,y:200});
    ground = new Ground(600,height,1200,20);
    platform=new Ground(600,200,600,20)
    

    box1 = new Box(300,275,30,40); 
    box2 = new Box(330,275,30,40); 
    box3 = new Box(360,275,30,40);  
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40);

    box13 = new Box(360,210,30,40);
    box14 = new Box(390,210,30,40);
    box15 = new Box(420,210,30,40);

    box16 = new Box(390,155,30,40)
    
    //polygon=new Polygon(50,200,20);
 

    
    
    
   
    
    
}


function draw(){
  background("white")
    Engine.update(engine);
    //strokeWeight(4);
    
    fill("blue")
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
    ground.display();   
//fill("gold");
//imageMode(CENTER)
//image(polygonImg ,ball.position.x,ball.position.y,40,40);
polygon.display()
slingshot.display();

}




function mouseDragged(){
//  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  slingshot.fly();
}


        function keyPressed(){
          if(keyCode === 32){
         
           Matter.Body.setPosition(polygon.body,{x:200,y:15})
           slingshot.attach(polygon.body);
          }
      
        

        
    
}

