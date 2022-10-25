import { Enemy } from "./enemy.js";

let i = 0;
const delay = 5;
export class Crawl extends Enemy {
    constructor(kind) {
        super(kind);
    }

    gravity() {
        this.position.y 
    }


    update() {
        if (i % delay == 0) 
            this.x += (this.x < this.creature.frame.length - 1) ? 1 : -this.x;
        i++;
        this.position.x -= (this.position.x > -this.creature.width) ? 3 : -this.canvas.width;
        this.draw();
    }

}