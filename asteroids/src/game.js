import Asteroid from "./asteroid";

class Game {
    constructor() {
        this.asteroids = [];
        this.addAsteroids();
        console.log(this.asteroids);
    }
    randomPosition(){
        return [Math.random() * (Game.DIM_X), Math.random() * (Game.DIM_Y)];
    }

    addAsteroids(){
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
        }
    }

    draw(ctx){
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i].draw(ctx);
        }
    }

    moveObjects(){
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i].move();
        }
    }
    
    static DIM_X = 900;
    static DIM_Y = 1800;
    static NUM_ASTEROIDS = 5;
}

export default Game;
