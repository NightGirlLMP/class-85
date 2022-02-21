canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_array_images=["mars1.jpg", "mars2.jpg", "mars3.jpg","mars4.jpg"];
random_number= Math.floor(Math.random()*4);
background_image=nasa_mars_array_images[random_number];
console.log("background_image = " + background_image);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="rover.png";

function add()
{
    bg=new Image();
    bg.onload=Upload_Background();
    bg.src=background_image;

    r=new Image();
    r.onload=Upload_Rover();
    r.src=rover_image;
}

function Upload_Background()
{
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}

function Upload_Rover()
{
    ctx.drawImage(r,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log("keyPressed");
    if (keyPressed=='37')
    {
        left();
        console.log("left");
    }

    if (keyPressed=='38')
    {
        up();
        console.log("up");
    }

    if (keyPressed=='39')
    {
        right();
        console.log("right");
    }

    if (keyPressed=='40')
    {
        down();
        console.log("down");
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        Upload_Background();
        Upload_Rover();
    }
}

function down()
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        Upload_Background();
        Upload_Rover();
    }
}

function left()
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        Upload_Background();
        Upload_Rover();
    }
}

function right()
{
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        Upload_Background();
        Upload_Rover();
    }
}