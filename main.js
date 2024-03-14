var st = "";
var pc = "";
function preload(){
st = localSound("Star Wars Theme Song by John Williams.mp3");
pc = localSound("Pirates of the Caribbean - Hes a Pirate.mp3");

}
function setup(){
    canvas = createCanvas(700, 600);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}
