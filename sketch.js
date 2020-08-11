let radius_ = 45;
let arc_cut = 10;
let angle;
let radius = 350;

function setup(){
    createCanvas(windowHeight-50,windowHeight-50);
    angle = 0;
    frameRate(5);
}
function give_radiant(degre) {
    return degre * PI / 180;
}
function draw(){
    background('rgb(0,0,0)');
    // line()
    noFill();
    stroke(color('#FF6D27'));
    strokeWeight(5);
    for(let arc_angle=0;arc_angle < 360;arc_angle = arc_angle + 90){
        console.log(arc_angle);
        arc(height/2,width/2,radius,radius,give_radiant(arc_angle+arc_cut),give_radiant(arc_angle+90-arc_cut));
    }
    noLoop();
    // if(angle == 360){
    //     angle = 0;
    // }
    // else{
    //     angle = angle + 1;
    // }
}