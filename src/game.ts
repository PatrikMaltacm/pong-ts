import raylib, { KEY_DOWN, KEY_UP } from 'raylib';
import { Paddle } from './paddle';

export class Game {
    windowWidth: number;
    windowHeight: number;
    windowTitle: string;
    gameFPSTarget: number;

    paddleOne: Paddle;

    constructor(windowWidth: number, windowHeight: number, windowTitle: string, gameFPSTarget: number) {
        this.windowWidth = windowWidth,
            this.windowHeight = windowHeight,
            this.windowTitle = windowTitle,
            this.gameFPSTarget = gameFPSTarget
            this.paddleOne = new Paddle(6);
    }

    update(): void{
        if(raylib.IsKeyDown(KEY_UP) && this.paddleOne.getPosition() > 0){
            console.log(this.paddleOne.getPosition() );
            this.paddleOne.moveUp()
        }
        if(raylib.IsKeyDown(KEY_DOWN) && this.paddleOne.getPosition() < 395){
            console.log(this.paddleOne.getPosition() );

            this.paddleOne.moveDown()
        }
    }

    initGame(): void {
        raylib.InitWindow(this.windowWidth, this.windowHeight, this.windowTitle);
        raylib.SetTargetFPS(this.gameFPSTarget);

        while (!raylib.WindowShouldClose()) {
            this.update();

            raylib.BeginDrawing();
            raylib.ClearBackground(raylib.RAYWHITE);
            this.paddleOne.draw();
            raylib.EndDrawing();
        }

        raylib.CloseWindow();
    }
}