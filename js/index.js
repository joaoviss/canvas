import { Background } from "./background.js";
import { Player } from './player.js';
import { Crawl } from "./crawl.JS";

const bg = new Background(0.6, 0.2, 3);
const player = new Player();
const enemy = new Crawl('crab');
const main = document.querySelector('.main');

const animate = () => {
    bg.update();
    player.update();
    enemy.update();
    requestAnimationFrame(animate);
}
animate();

addEventListener('keydown', ({ keyCode }) => {
    switch(keyCode) {
        case 38: player.jump(); break;
        case 40: player.spin(); break;
    }
});
main.addEventListener('touchstart', ({touches}) => {
    (touches[0].clientY < (main.scrollHeight / 2)) ? player.jump() : player.spin();
});
