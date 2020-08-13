let angle = 1;
let triangle_side = 300; // Hyptonese
let opposite,adacent;
let screen_side;

function setup(){
    createCanvas(windowHeight - 60, windowHeight - 60);
    screen_side = width;
    opposite = sin(angle)*triangle_side;
    adacent = cos(angle)*triangle_side;
    console.log(opposite,adacent);

    frameRate(30);
}

function draw(){
    background(color(0,0,0));
    stroke(color(25,255,255));
    strokeWeight(4);
    point(screen_side/2+adacent,screen_side/2-opposite);
    stroke(color(255,255,255));
    noFill();
    strokeWeight(1);
    beginShape();
    vertex(screen_side/2,screen_side/2);
    vertex(screen_side/2+adacent,screen_side/2-opposite);
    vertex(screen_side/2+adacent,screen_side/2);
    vertex(screen_side/2,screen_side/2);
    endShape();
}