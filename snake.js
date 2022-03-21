var s;


function create(){
    createCanvas(600, 600);
    s = new Snake();
}

function draw(){
    background(51);
    s.update();
    s.show();
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW){

    }

}

function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
}

this.updae = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.y + this.yspeed;

}

this.show = function() {
    fill(255);
    redirect(this.x, this.y, 10, 10);

}
