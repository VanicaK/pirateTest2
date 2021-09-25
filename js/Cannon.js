class Cannon{
    constructor(x,y,w,h,angle){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.angle=angle;

        this.cannonImage=loadImage("assets/CANON.png");
        this.baseImage=loadImage("assets/cannon_base.png");

        
        
    }

    display(){
        //image(this.baseImage,)
        if(keyIsDown(DOWN_ARROW)&& this.angle<=1){
            this.angle+=0.02;
        }
        if(keyIsDown(UP_ARROW)&&this.angle>=-1){
            this.angle-=0.02;
        }
        rectMode(CENTER);
        
        ellipseMode(RADIUS);
        image(this.baseImage,60,40,200,200,PI,TWO_PI);
        push();
        imageMode(CENTER);
        translate(this.x,this.y);
        rotate(this.angle);
        image(this.cannonImage,0,0,this.w,this.h)
        pop();
        
    }
}