let arc_cut = 10;

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

// hh:mm:ss
let hands_weights = [15, 5, 2];
let hands_size = [big_diamtere / 6, big_diamtere / 2.3, big_diamtere / 3];
let mid_point;
// This is the point where are all hands come from
/*
You will find that Many times i have used side instead of width and height because my canvas is a square equals
*/
function setup() {
    createCanvas(windowHeight - 50, windowHeight - 50);
    angle = 0;
    side = width;

    // These are the experimental values i just tested and then found it and these are the cordinates for numbers like 3,6,9,12 on clock
    clock_watches = [[side / 2 - 30, side / 2 - big_diamtere / 2 + 80],
    [side / 2 - big_diamtere / 2 + 30, side / 2 + 20],
    [side / 2 - 20, side / 2 + big_diamtere / 2 - 35],
    [side / 2 + big_diamtere / 2 - 60, side / 2 + 20]];

    mid_point = side/2;

    frameRate(60);
}
function give_radiant(degre) {
    return degre * PI / 180;
}
function give_angle_of_clock(hand_) {
    // It will return the angle of the any hand of the clock by time
    // For Testing time is 7:19:11
    if (hand_ == 0) {// Hour
        return 360 * (hour()%12) / 12;
    }
    else if (hand_ == 1) { // Minute
        return 360 * minute() / 60;
    }
    else if (hand_ == 2) { // Second
        // console.log(360 * second() / 60,second());
        return 360 * second() / 60;
    }
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


    // Writing numbers/clock_watches like 3,6,9,12 and making =,||
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
    stroke(color(255, 255, 255));
    
    let angle;
    let adacent; // Reference Link: https://www.mathsisfun.com/sine-cosine-tangent.html
    let opposite;
    for (let i = 0; i < hands_size.length; i++) {
        strokeWeight(hands_weights[i]);
        angle = give_angle_of_clock(i);
        let angle_copy = angle;
        let hSize = hands_size[i];

        angle = give_radiant(angle % 90); // I have % by 90 cause i want if angle is like 150->60,300->30,45->45
        opposite = sin(angle) * hSize;
        adacent = cos(angle) * hSize;
        // console.log(angle_copy,angle);
        if(angle_copy == 0){
            line(mid_point,mid_point,mid_point,mid_point-hSize);
        }
        else if(angle_copy == 90){
            line(mid_point,mid_point,mid_point+hSize,mid_point);
        }
        else if(angle_copy == 180){
            line(mid_point,mid_point,mid_point,mid_point+hSize);
        }
        else if(angle_copy == 270){
            line(mid_point,mid_point,mid_point-hSize,mid_point);
        }
        else if(angle_copy <90){// From 12-3
            line(mid_point, mid_point, mid_point+opposite, mid_point-adacent);
        }
        else if(angle_copy >90 && angle_copy < 180){ // From 3-6
            line(mid_point, mid_point, mid_point + adacent, mid_point+opposite);
        }
        else if(angle_copy >180 && angle_copy < 270){ // From 6-9
            line(mid_point, mid_point, mid_point - opposite, mid_point+adacent);
        }
        else if(angle_copy >270 && angle_copy < 360){ // From 9-12
            line(mid_point, mid_point, mid_point - adacent, mid_point-opposite);
        }
        else{
            console.log("yes it gones"+angle_copy);
        }
    }
    // Making Two mid circles
    // I have made them in last to make cut effect of hands of clock
    ellipse(side / 2, side / 2, small_diametere, small_diametere);
    strokeWeight(4);
    fill(color(0,0,0));
    ellipse(side / 2, side / 2, mid_diameter, mid_diameter);
    // noLoop();
}