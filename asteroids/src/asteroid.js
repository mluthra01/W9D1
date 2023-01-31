import MovingObject from "./movingObject.js"
import * as Util from "./util.js";

class Asteroid extends MovingObject {
    
    static RADIUS = 25;
    static COLOR = "Aqua";
    
    constructor(args) {
        super(args);
        this.vel = Util.randomVec();
        this.radius = Asteroid.RADIUS;
        this.color = Asteroid.COLOR;
    }
}

export default Asteroid;