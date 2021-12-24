function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,510);

    poseNet=ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#354a2f");
    document.getElementById("square_side").innerHTML="Width and Height of a square will be = "+ difference + "px";
    fill("#cfdee3");
    stroke("#808080");
    square(nose_X,nose_Y,difference);
}
function modelLoaded(){
    console.log('Pose Net is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_X=results[0].pose.nose.x;
        nose_Y=results[0].pose.nose.y;
        console.log("nose X = " + nose_X + "nose Y" + nose_Y);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x
        difference=Math.floor(leftWristX - rightWristX);
        console.log("leftWrist x = " + leftWristX + "rightWrist x = " + rightWristX + "difference = " + difference);
    }
}function draw(){
    background("#354a2f");
    document.getElementById("square_side").innerHTML="Width and Height of a square will be = "+ difference + "px";
    textSize("difference");
    fill("#cfdee3");
    text(Aradhyo, 50, 400);
}
function modelLoaded(){
    console.log('Pose Net is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_X=results[0].pose.nose.x;
        nose_Y=results[0].pose.nose.y;
        console.log("nose X = " + nose_X + "nose Y" + nose_Y);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x
        difference=Math.floor(leftWristX - rightWristX);
        console.log("leftWrist x = " + leftWristX + "rightWrist x = " + rightWristX + "difference = " + difference);
    }
}