  class Umbrella{
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/walkingFrame/walking_1.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      }
}