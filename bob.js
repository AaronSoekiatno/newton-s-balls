class Bob{
    constructor(x,y,diameter){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density: 1.2,
        }
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.body = Bodies.circle(x,y,diameter,options);
        World.add(world,this.body);
    }

    display(){
        ellipseMode(CENTER);
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,this.diameter);
    }
}