import { Paddle } from './paddle';
import { Ball } from './ball';
export declare class Game {
    windowWidth: number;
    windowHeight: number;
    windowTitle: string;
    gameFPSTarget: number;
    paddleOne: Paddle;
    paddleTwo: Paddle;
    ball: Ball;
    private ballVelocity;
    private velocityMultiplier;
    constructor(windowWidth: number, windowHeight: number, windowTitle: string, gameFPSTarget: number);
    moveInput(): void;
    detectCollision(): void;
    verticalCollision(): void;
    gameOver(): void;
    update(): void;
    initGame(): void;
}
//# sourceMappingURL=game.d.ts.map