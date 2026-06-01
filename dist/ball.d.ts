export declare class Ball {
    x: number;
    y: number;
    size: number;
    private speedX;
    private speedY;
    private screenHeight;
    constructor(x: number, y: number, size: number, speedX: number, speedY: number, screenHeight: number);
    move(): void;
    draw(): void;
    reset(x: number, y: number, speedX: number, speedY: number): void;
    getPosition(): {
        x: number;
        y: number;
    };
    invertX(): void;
    invertY(): void;
    increaseSpeed(multiplier: number): void;
}
//# sourceMappingURL=ball.d.ts.map