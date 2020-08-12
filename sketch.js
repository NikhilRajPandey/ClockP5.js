let arc_cut = 10;
// let angle;
let big_diamtere = 650;
let small_diametere = 15;
let mid_diameter = 55;

let first_text_size = 84;
let second_text_size = first_text_size * 0.5;
let third_text_size = second_text_size * 1.5;

let text_width = 125;
let side;
let clock_watches;
// 3,6,9,12 Like texts

let hands_weights = [8,5,2]
let hands_size = [big_diamtere/5,big_diamtere/3,big_diamtere/4];
// hh:mm:ss
let hands_positions;
// It will contain the all heigh,adacent side to represent hands
let hand_starting;
// This is the point where are all hands come from
let increments_angle = [360/12,360/60]; // By Unitary Method we find angle between a hour,minutes,seconds [minutes will be equal to seconds]
/*
You will find that Many times i have used side instead of width and height because my canvas is a square equals
*/
function setup() {
    createCanvas(windowHeight - 50, windowHeight - 50);
    angle = 0;
    side = width;
    // These are the experimental values i just tested and then found it
    clock_watches = [[side / 2 - 30, side / 2 - big_diamtere / 2 + 80],
    [side / 2 - big_diamtere / 2 + 30, side / 2 + 20],
    [side / 2 - 20, side / 2 + big_diamtere / 2 - 35],
    [side / 2 + big_diamtere / 2 - 60, side / 2 + 20]];
    hands = [hour(),minute(),second()];
    hand_starting = [width/2+mid_diameter/2,width/2];
    frameRate(30);
}
function give_radiant(degre) {
    return degre * PI / 180;
}
function draw() {
    strokeCap(SQUARE);
    background('rgb(0,0,0)');
    noFill();
    stroke(color('#FF6D27'));
    strokeWeight(8);
    // Making the arcs
    for (let arc_angle = 0; arc_angle < 360; arc_angle = arc_angle + 90) {
        arc(side / 2, side / 2, big_diamtere, big_diamtere, give_radiant(arc_angle + arc_cut), give_radiant(arc_angle + 90 - arc_cut));
    }
    stroke(color(255, 255, 255));
    strokeWeight(2);

    // Making Two mid circles
    ellipse(side / 2, side / 2, small_diametere, small_diametere);
    strokeWeight(4);
    ellipse(side / 2, side / 2, mid_diameter, mid_diameter);

    // Writing numbers like 3,6,9,12 and making =,||
    noStroke();
    fill(color(255, 255, 255));
    textSize(64);
    text('12', clock_watches[0][0], clock_watches[0][1]);
    text('9', clock_watches[1][0], clock_watches[1][1]);
    text('6', clock_watches[2][0], clock_watches[2][1]);
    text('3', clock_watches[3][0], clock_watches[3][1]);

    // Writing Time Text
    noStroke();
    textSize(first_text_size);
    fill(color("#FCE94F"));
    textFont('antonFont');
    text("TIME", side / 2 - text_width, side / 2 + 100);

    // Writing 'is' text
    textSize(second_text_size);
    fill(color(255, 255, 255));
    text("IS", side / 2 - text_width + 70, side / 2 + 150);

    // Writing 'Money' Text
    textSize(third_text_size);
    fill(color('#700E8A'));
    text("MONEY", side / 2, side / 2 + 160);

    /* **************Main and Important thing Moving and Making of the hands************** */
    stroke(color(255,255,255));
    for(let i =0;i<hands_size.length;i++){
    strokeWeight(hands_weights[i]);
    line(hand_starting[0],hand_starting[1],hand_starting[0]+hands_size[i],hand_starting[1]);
    }
    noLoop();
}