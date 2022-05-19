lipstick_x=0;
lipstick_y=0;

function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log('poseNet is on and intialized');
}

function draw(){

}

function take_snapshot(){
    save('mylipstick.png');
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    lipstick_x=results[0].pose.lipstick.x-15;
    lipstick_y=results[0].pose.lipstick.y-15;
}
}