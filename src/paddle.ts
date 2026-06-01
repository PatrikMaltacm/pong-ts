import raylib from 'raylib';

export class Paddle {
    x: number;
    y: number;
    speed: number;
    height: number;
    width: number;
    screenHeight: number;

    constructor(x: number, speed: number, screenHeight: number) {
        this.x = x;
        this.y = screenHeight / 2 - 30;
        this.speed = speed;
        this.height = 60;
        this.width = 20;
        this.screenHeight = screenHeight;
    }

    moveUp(): void {
        if (this.y > 0) {
            this.y -= this.speed;
        }
    }

    moveDown(): void {
        if (this.y + this.height < this.screenHeight) {
            this.y += this.speed;
        }
    }

    getPosition(): { x: number, y: number } {
        return { x: this.x, y: this.y };
    }

    draw(): void {
        raylib.DrawRectangle(this.x, this.y, this.width, this.height, raylib.WHITE);
    }
}