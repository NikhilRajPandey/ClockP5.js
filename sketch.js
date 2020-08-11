let arc_cut = 10;
let angle;
let diametere = 650;
let small_radius = 15;
let mid_radius = 55;
let first_text_size = 84;
let second_text_size = first_text_size * 0.5;
let third_text_size = second_text_size * 1.5;
let text_width = 125;
let side;
/*
You will find that Many times i have used side instead of width and height because my canvas is a square equals
*/
function setup(){
    createCanvas(windowHeight-50,windowHeight-50);
    angle = 0;
    side = width;
    frameRate(5);
}
function give_radiant(degre) {
    return degre * PI / 180;
}
function draw(){
    background('rgb(0,0,0)');
    noFill();
    stroke(color('#FF6D27'));
    strokeWeight(8);
    // Making the arcs
    for(let arc_angle=0;arc_angle < 360;arc_angle = arc_angle + 90){
        arc(side/2,side/2,diametere,diametere,give_radiant(arc_angle+arc_cut),give_radiant(arc_angle+90-arc_cut));
    }
    stroke(color(255,255,255));
    strokeWeight(2);

    // Making Two mid circles
    ellipse(side/2,side/2,small_radius,small_radius);
    strokeWeight(4);
    ellipse(side/2,side/2,mid_radius,mid_radius);

    // Writing numbers like 3,6,9,12 and making =,||
    noStroke();
    fill(color(255,255,255));
    textSize(64);
    // These are the experimental values i just tested and then found it
    text('12',side/2-30,side/2-diametere/2+80);
    text('9',side/2-diametere/2+30,side/2+20);
    text('6',side/2-20,side/2+diametere/2-35);
    text('3',side/2+diametere/2-60,side/2+20);

    // Writing Time Text
    noStroke();
    textSize(first_text_size);
    fill(color("#FCE94F"));
    textFont('antonFont');
    text("TIME",side/2-text_width,side/2+100);

    // Writing 'is' text
    textSize(second_text_size);
    fill(color(255,255,255));
    text("IS",side/2-text_width+70,side/2+150);

    // Writing 'Money' Text
    textSize(third_text_size);
    fill(color('#700E8A'));
    text("MONEY",side/2,side/2+160);
    noLoop();
}