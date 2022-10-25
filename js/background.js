/** @type { HTMLCanvasElement } */

export class Background {
   constructor(b1, b2, f1) {
       this.images = {
            'mountains': document.querySelector('#mountains'),
            'stars': document.querySelector('#stars'),
            'canvas': document.querySelector('#back'),
            'grass': document.querySelector('#grass'),
            'tree1': document.querySelector('#tree1'),
            'tree2': document.querySelector('#tree2'),
        }
        this.backCanvas = document.querySelector('#back');
        this.frontCanvas = document.querySelector('#front');
        this.backContext = this.backCanvas.getContext('2d');
        this.frontContext = this.frontCanvas.getContext('2d');
        this.backCanvas.width = this.frontCanvas.width = 600;
        this.backCanvas.height = this.frontCanvas.height = 500;
        this.b1 = b1;
        this.b2 = b2;
        this.f1 = f1;
        this.t1 = f1 - b1;
        this.t2 = f1 + b1;
        this.x1 = this.x2 = this.x3 = 0;
        this.x4 = this.x5 = this.frontCanvas.width;
    }

    draw() {
        let grad = this.backContext.createLinearGradient(0, 0, 0, this.backCanvas.height);
        grad.addColorStop(0, 'darkblue');
        grad.addColorStop(1, 'rgb(9, 3, 30)');
        this.backContext.fillStyle = grad;
        this.backContext.clearRect(0, 0, this.backCanvas.width, this.backCanvas.height);
        this.frontContext.clearRect(0, 0, this.backCanvas.width, this.backCanvas.height);
        this.backContext.fillRect(0, 0, this.backCanvas.width, this.backCanvas.height);
        this.backContext.drawImage(this.images.stars, this.x2, 0);
        this.backContext.drawImage(this.images.mountains, this.x1, this.backCanvas.height - 374);
        this.frontContext.drawImage(this.images.grass, this.x3, this.backCanvas.height - 62);
        this.backContext.drawImage(this.images.tree2, this.x4, this.backCanvas.height - 165);
        this.frontContext.drawImage(this.images.tree1, this.x5, this.backCanvas.height - 214);

    }

    update() {
        this.draw();
        this.x1 = (this.x1 > -this.backCanvas.width) ? this.x1 - this.b1 : 0;
        this.x2 = (this.x2 > -this.backCanvas.width) ? this.x2 - this.b2 : 0;
        this.x3 = (this.x3 > -this.backCanvas.width) ? this.x3 - this.f1 : 0;
        this.x4 = (this.x4 > -this.backCanvas.width) ? this.x4 - this.t1 : this.backCanvas.width;
        this.x5 = (this.x5 > -this.backCanvas.width) ? this.x5 - this.t2 : this.backCanvas.width;
    }
}
