var block1,block2,block3,block4,block5,block6,block7,block8,block9,polygon,polygonImg;

function preload(){

polygon=loadImage("polygon.png");

}

function setup(){

createCanvas(600,700);

    //level two
    block1=new Block(330,235,30,40);
    block2=new Block(360,235,30,40);
    block3=new Block(390,235,30,40);
    block4=new Block(420,235,30,40);
    block5=new Block(450,235,30,40);
    //level three
    block6=new Block(360,195,30,40);
    block7=new Block(390,195,30,40);
    block8=new Block(420,195,30,40);
    //top
    block9=new Block(390,155,30,40);
    
    polygon=createSprite(200,200,20,20);
    polygon.addImage=polygonImg;
    
}

function draw(){
//polygon holder with slings
polygon = bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new slingShot(this.polygon,{x:100,y:200});

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

text ("SCORE:"+Score,750,40);

}

function keyPressed (){
    if(keyCode === 32){
   slingShot.attach(this.polygon);
 }
}

function score(){
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
}








