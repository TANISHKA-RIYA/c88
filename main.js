var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_X = 10;
player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_X
        });
        canvas.add(player_object);

    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(img) {
        block_image_object = img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_X
        });
        canvas.add(block_image_object);

    })
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '80') {
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keypressed == '77') {
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keypressed == '38') {
        up();
        console.log("up");
    }

    if (keypressed == '40') {
        down();
        console.log("down");
    }

    if (keypressed == '37') {
        left();
        console.log("left");
    }

    if (keypressed == '39') {
        right();
        console.log("right");
    }

    if (keypressed == '87') {
        new_image('wall.jpg');
        console.log("w");
    }

    if (keypressed == '76') {
        new_image('light_green.png');
        console.log("l");
    }

    if (keypressed == '84') {
        new_image('trunk.jpg');
        console.log("t");
    }

    if (keypressed == '71') {
        new_image('ground.png');
        console.log("g");
    }

    if (keypressed == '82') {
        new_image('roof.jpg');
        console.log("r");
    }

    if (keypressed == '89') {
        new_image('yellow_wall.png');
        console.log("y");
    }

    if (keypressed == '68') {
        new_image('dark_green.png');
        console.log("d");
    }

    if (keypressed == '85') {
        new_image('different.png');
        console.log("u");
    }

    if (keypressed == '67') {
        new_image('cloud.jpg');
        console.log("c");
    }
}

function up() {

    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("when up arrow is pressed x= " + player_X + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {

    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("when down arrow is pressed x= " + player_X + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {

    if (player_X >= 0) {
        player_X = player_X - block_image_width;
        console.log("block_image_width = " + block_image_width);
        console.log("when left arrow is pressed x= " + player_X + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {

    if (player_X <= 850) {
        player_X = player_X + block_image_width;
        console.log("block_image_width = " + block_image_width);
        console.log("when right arrow is pressed x= " + player_X + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}