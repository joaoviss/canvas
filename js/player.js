/** @type { HTMLCanvasElement } */
import { animations } from "./animations.js";

let i = 0;
const delay = 5;

export class Player {
    
    constructor(stance = 'run') {
        this.animation = animations[stance];
        this.spritesheet = document.querySelector('#sonic-sprites');
        this.canvas = document.querySelector('#game');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 500;
        this.start = 100;
        this.position = { x: this.start, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.g = 0.8;
        this.a = 1;
        this.frame = 0;
    }
    
    gravity() {
        this.position.y += this.velocity.y;
        this.velocity.y = (this.position.y + this.velocity.y + this.animation.height <= this.canvas.height) ?
        this.velocity.y + this.g : 0;
        // 
        this.position.x += this.velocity.x;
        this.velocity.x = (this.position.x >= this.start) ? this.velocity.x - this.a : 0;
        // if (this.position.x > 0)
        //     this.position.x--;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.spritesheet, this.animation.posX[this.frame], this.animation.posY, this.animation.width, this.animation.height, this.position.x, this.position.y, this.animation.width, this.animation.height);
    }

    update() {
        this.gravity();
        if (i % delay == 0)
            this.frame += (this.frame < this.animation.posX.length - 1) ? 1 : -this.frame;
        i++;
        if ((this.onGround()) && (this.position.x <= this.start)) {
            this.animation = animations.run;
            this.position.y = this.canvas.height - this.animation.height;
        }
        this.draw();
    }
    
    onGround() {
        return this.position.y + this.velocity.y + this.animation.height >= this.canvas.height;
    }

    
    jump() {
        if (this.onGround()) {
            this.animation = animations.jump;
            this.velocity.y -= 20;
        }
    }
    
    spin() {
        if (this.position.x <= this.start) {
            this.animation = animations.spin;
            this.velocity.x += 20;
        }
    }
/*
    dash() {
        this.animation = animations.dash;
        this.start += 30;
    }
//*/
}
