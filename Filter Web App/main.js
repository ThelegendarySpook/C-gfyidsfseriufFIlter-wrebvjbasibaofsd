noseX=0;
noseY=0;


function preload() {
    filter_nose = loadImage('https://i.postimg.cc/xTGc77Mt/il-340x270-3705749587-rfh6.webp');
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log('PoseNet Is Initialized');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(filter_nose, noseX, noseY, 30, 30);
}


function take_snapshot(){
    save('L.png');
}