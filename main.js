canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
background_image="mars.jpg";
rover_image="rover.png";
rover_height=100;
rover_width=100;
rover_y=100;
rover_x=100;

function add(){
    background_img_tag = new Image();
    background_img_tag.onload = upload_background;
    background_img_tag.src = background_image;

    rover_img_tag = new Image();
    rover_img_tag.onload = upload_rover;
    rover_img_tag.src = rover_image;
}

function upload_background(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_img_tag,0,0,rover_width,rover_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed =='38'){
        up();
        console.log("up");

    }
    if(keyPressed =='40'){
        down();
        console.log("down");

    }
    if(keyPressed =='37'){
        left();
        console.log("left");

    }
    if(keyPressed =='39'){
        right();
        console.log("right");

    }


}

function up()
{
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        upload_background();
        upload_rover();

    }


}

function down()
{
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        upload_background();
        upload_rover();

    }


}

function left(){
    if(rover_x >= 0)
    rover_x = rover_x - 10;
    upload_background();
    upload_rover();

}

function right(){
    if(rover_x <= 700)
    rover_x = rover_x + 10;
    upload_background();
    upload_rover();

}