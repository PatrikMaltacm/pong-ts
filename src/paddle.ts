import raylib from 'raylib';

export class Paddle{
    y: number;
    speed: number;

    constructor(speed: number){
        this.y = 0;
        this.speed = speed;
    }

    moveUp(): void{
        this.y -= this.speed;
    }
    moveDown(): void{
        this.y += this.speed;
    }

    getPosition(): number {
        return this.y;
    }

    draw(): void{
        raylib.DrawRectangle(0, this.y, 20, 60, raylib.BLACK);
    }
} 