class CannonBall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 35;
        var options = {
            isStatic: true,
            restitution: 0.07,
            density: 1,
        }
        this.image = loadImage("assets/cannonball.png");
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
    /*shoot(){
        var velocity=p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }*/
    shoot() {
        console.log("e")
        console.log(cannon.angle);
         var velocity = p5.Vector.fromAngle(cannon.angle);
         velocity.mult(20);
         Matter.Body.setStatic(this.body, false);
         Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
}