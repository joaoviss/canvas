import { creatures } from "./creatures.js";

export class Enemy {
    constructor(kind) {
        this.creature = creatures[kind];
        this.spritesheet = document.querySelector('#enemy-sprites');
        this.canvas = document.querySelector('#enemy');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 500;
        this.x = 0;
        this.frame = 0;
        this.position = {
            x: this.canvas.width,
            y: this.canvas.height - this.creature.height
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.spritesheet, this.creature.frame[this.x], this.creature.type, this.creature.width, this.creature.height, this.position.x, this.position.y, this.creature.width, this.creature.height);
    }
}
