
let r = 8;
let count = 400;
let i = 0;
let x=0,y=0;


function setup() {
  createCanvas(640, 640);
}

function draw() {
  background("indigo");
  i = 0;
  while(i<=width){
    let dis = map(sin((mouseX)/600+i*count), -1,1, -160,160);
    noStroke();
    fill("hotpink");
    circle(x+i+dis,y+i,r);
    fill("gold");
    circle(x+i-dis,y+i,r);
    i = i+(width/count);
  }
  
}