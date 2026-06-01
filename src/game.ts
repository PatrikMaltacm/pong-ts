import raylib, { KEY_DOWN, KEY_S, KEY_UP, KEY_W } from 'raylib';
import { Paddle } from './paddle';

export class Game {
    windowWidth: number;
    windowHeight: number;
    windowTitle: string;
    gameFPSTarget: number;
    paddleOne: Paddle;
    paddleTwo: Paddle;

    constructor(windowWidth: number, windowHeight: number, windowTitle: string, gameFPSTarget: number) {
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.windowTitle = windowTitle;
        this.gameFPSTarget = gameFPSTarget;

        this.paddleOne = new Paddle(10, 6, windowHeight);
        this.paddleTwo = new Paddle(windowWidth - 30, 6, windowHeight);
    }

    update(): void {
        if (raylib.IsKeyDown(KEY_UP)) {
            this.paddleOne.moveUp();
        }
        if (raylib.IsKeyDown(KEY_DOWN)) {
            this.paddleOne.moveDown();
        }

        if (raylib.IsKeyDown(KEY_W)) {
            this.paddleTwo.moveUp();
        }
        if (raylib.IsKeyDown(KEY_S)) {
            this.paddleTwo.moveDown();
        }
    }

    initGame(): void {
        raylib.InitWindow(this.windowWidth, this.windowHeight, this.windowTitle);
        raylib.SetTargetFPS(this.gameFPSTarget);

        while (!raylib.WindowShouldClose()) {
            this.update();

            raylib.BeginDrawing();
            raylib.ClearBackground(raylib.BLACK);
            this.paddleOne.draw();
            this.paddleTwo.draw();
            raylib.EndDrawing();
        }

        raylib.CloseWindow();
    }
}