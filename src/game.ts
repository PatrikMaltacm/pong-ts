import raylib from 'raylib';

export class Game {
    windowWidth: number;
    windowHeight: number;
    windowTitle: string;
    gameFPSTarget: number;

    constructor(windowWidth: number, windowHeight: number, windowTitle: string, gameFPSTarget: number) {
        this.windowWidth = windowWidth,
            this.windowHeight = windowHeight,
            this.windowTitle = windowTitle,
            this.gameFPSTarget = gameFPSTarget
    }

    initGame(): void {
        raylib.InitWindow(this.windowWidth, this.windowHeight, this.windowTitle);
        raylib.SetTargetFPS(this.gameFPSTarget);

        while (!raylib.WindowShouldClose()) {
            raylib.BeginDrawing();
            raylib.ClearBackground(raylib.RAYWHITE);
            raylib.DrawText("node-raylib funciona!", 190, 200, 20, raylib.LIGHTGRAY);
            raylib.EndDrawing();
        }

        raylib.CloseWindow();
    }
}