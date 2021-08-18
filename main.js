img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('dog_cat.jpg');
}


function draw() {
    if(status != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTMl = "Status : Object Detected";

    fill("#FF0000");
    precent = floor(objects[i].confidence * 100);
    text(objects[i].lable + " " + percent + "%", objects[i].x, objects[i].y);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);  
    
        }
    }
}

function setup() {
   canvas = createCanvas(640, 420);
   canvas.center();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results); 
    object = results;
}