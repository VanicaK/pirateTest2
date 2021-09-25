class Tower{
  constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;

    var options={
      isStatic:true,
    }
    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body);
    this.image=loadImage("assets/tower.png");
  }

  display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
  }
}