export declare class Paddle {
    x: number;
    y: number;
    speed: number;
    height: number;
    width: number;
    screenHeight: number;
    constructor(x: number, speed: number, screenHeight: number);
    moveUp(): void;
    moveDown(): void;
    getPosition(): {
        x: number;
        y: number;
    };
    draw(): void;
}
//# sourceMappingURL=paddle.d.ts.map