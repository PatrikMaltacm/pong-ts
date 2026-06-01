import { Paddle } from './paddle';
export declare class Game {
    windowWidth: number;
    windowHeight: number;
    windowTitle: string;
    gameFPSTarget: number;
    paddleOne: Paddle;
    constructor(windowWidth: number, windowHeight: number, windowTitle: string, gameFPSTarget: number);
    update(): void;
    initGame(): void;
}
//# sourceMappingURL=game.d.ts.map