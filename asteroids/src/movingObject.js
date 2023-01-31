class MovingObject {
    constructor(args) {
        this.pos = args["pos"];
        this.vel = args["vel"];
        this.radius = args["radius"];
        this.color = args["color"];
    }

    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(300, 300, 50, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        console.log("test");
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}
export default MovingObject;