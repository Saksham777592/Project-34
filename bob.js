class Bob {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            friction: 0.3,
            restitution: 1,
            density: 2,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
        }
        this.body = Bodies.circle(x, y , r, options);
        this.r = r;

        World.add(world, this.body);
    }
    draw() {
        var pos = this.body.position;

        fill("red");
        ellipse(pos.x, pos.y, this.r);
        ellipseMode(RADIUS);
        
    }
}