"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const raylib_1 = __importDefault(require("raylib"));
class Game {
    windowWidth;
    windowHeight;
    windowTitle;
    gameFPSTarget;
    constructor(windowWidth, windowHeight, windowTitle, gameFPSTarget) {
        this.windowWidth = windowWidth,
            this.windowHeight = windowHeight,
            this.windowTitle = windowTitle,
            this.gameFPSTarget = gameFPSTarget;
    }
    initGame() {
        raylib_1.default.InitWindow(this.windowWidth, this.windowHeight, this.windowTitle);
        raylib_1.default.SetTargetFPS(this.gameFPSTarget);
        while (!raylib_1.default.WindowShouldClose()) {
            raylib_1.default.BeginDrawing();
            raylib_1.default.ClearBackground(raylib_1.default.RAYWHITE);
            raylib_1.default.DrawText("node-raylib funciona!", 190, 200, 20, raylib_1.default.LIGHTGRAY);
            raylib_1.default.EndDrawing();
        }
        raylib_1.default.CloseWindow();
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map