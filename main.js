function preload(){
}


function setup(){
canvas = createCanvas(600, 600);
background("#000000");
canvas.position(200, 200);
video = createCapture(VIDEO);
video.hide();
tint_color="grey";

}

function draw(){
    fill(211,211,211);
    rect(45,50,500,500);
    image(video,45,50,500,500);
    circle(50,55,55);
    fill(169,169,169);
    circle(50,55,45);
    fill(211,211,211);
    circle(550,55,55);
    fill(169,169,169);
    circle(550,55,45);
    fill(211,211,211);
    circle(50,555,55);
    fill(169,169,169);
    circle(50,555,45);
    fill(211,211,211);
    circle(550,555,55);
    fill(169,169,169);
    circle(550,555,45);
}
function take_snapshot(){
    save('student_name.png');
}
