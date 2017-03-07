var newWidth = 50;
var newHeight = 50;

//setup function excutes once 
function setup(){
   createCanvas(600,400); 
   background(50);
}

//draw function loops 
function draw(){
    // background(50);
    if(mouseIsPressed){
          noStroke();
          fill(255,0,255,100);
          ellipse(mouseX, mouseY,newWidth,newHeight);     
    }
   
}