class Plinko {
    constructor(x,y){
        var options={
            isStatic:true,
            friction:0.4,
            density:3,
           restitution:1.2,
        }
        this.x=x;
        this.y=y;
        this.r=10;
  
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        fill ("lightpink");
  
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop ()
    }
  }