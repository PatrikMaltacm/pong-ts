import raylib from 'raylib';

export class Ball {
    public x: number;
    public y: number;
    public size: number;

    private speedX: number;
    private speedY: number;
    private screenHeight: number;

    constructor(x: number, y: number, size: number, speedX: number, speedY: number, screenHeight: number) {
        this.x = x;
        this.y = screenHeight / 2 - 30;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.screenHeight = screenHeight;
    }

    public move(): void {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    public draw(): void {
        raylib.DrawCircle(this.x, this.y, this.size, raylib.WHITE);
    }

    public reset(x: number, y: number, speedX: number, speedY: number): void {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    public getPosition(): { x: number, y: number } {
        return { x: this.x, y: this.y };
    }

    public invertX(): void {
        this.speedX = -this.speedX;
    }

    public invertY(): void {
        this.speedY = -this.speedY;
    }

    public increaseSpeed(multiplier: number): void {
        this.speedX += this.speedX * multiplier;
        this.speedY += this.speedY * multiplier;
    }
}