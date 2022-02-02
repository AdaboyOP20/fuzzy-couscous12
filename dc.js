img = "";
status = "";
objects = [];

// Creates Canvas
function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video - createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

// loads the image
function preload()
{
    img = loadImage('dog_cat.jpg');
}

// puts the image on the canvas and displays the corresponding texts
function draw()
{
    image(video, 0, 0, 380, 380);


    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document,getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+ objects.length;
            fill("r, g, b");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("r, g, b");
            rect(objects[i].x, objects[i].y, objects[i].width - 100, objects[i].height - 100);

        }
    }
}

// loads the result
function modelLoaded()
{
    status = true;
    objectDetector.detect(video, gotResult);
}


function gotResult(error, results)
{
    if (error) 
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

