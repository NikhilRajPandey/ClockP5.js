let radius_ = 45;
let arc_cut = 10;
let angle;
let radius = 650;
let small_radius = 15;
let mid_radius = 55;
let first_text_size = 84;
let second_text_size = first_text_size * 0.5;
let third_text_size = second_text_size * 1.5;
let text_width = 125;
/*
You will find that Many times i have used width instead of width because width and height are equals
*/
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
    strokeWeight(8);
    for(let arc_angle=0;arc_angle < 360;arc_angle = arc_angle + 90){
        arc(height/2,width/2,radius,radius,give_radiant(arc_angle+arc_cut),give_radiant(arc_angle+90-arc_cut));
    }
    stroke(color(255,255,255));
    strokeWeight(2);
    // Making Two mid circles
    ellipse(width/2,height/2,small_radius,small_radius);
    strokeWeight(4);
    ellipse(width/2,height/2,mid_radius,mid_radius);

    // Writing Time Text
    noStroke();
    textSize(first_text_size);
    fill(color("#FCE94F"));
    textFont('antonFont');
    text("TIME",width/2-text_width,width/2+100);

    // Writing 'is' text
    textSize(second_text_size);
    fill(color(255,255,255));
    text("IS",width/2-text_width+70,width/2+150);

    // Writing 'Money' Text
    textSize(third_text_size);
    fill(color('#700E8A'));
    text("MONEY",width/2,width/2+160);
    noLoop();
}