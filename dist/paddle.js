"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paddle = void 0;
const raylib_1 = __importDefault(require("raylib"));
class Paddle {
    x;
    y;
    speed;
    height;
    width;
    screenHeight;
    constructor(x, speed, screenHeight) {
        this.x = x;
        this.y = screenHeight / 2 - 30;
        this.speed = speed;
        this.height = 60;
        this.width = 20;
        this.screenHeight = screenHeight;
    }
    moveUp() {
        if (this.y > 0) {
            this.y -= this.speed;
        }
    }
    moveDown() {
        if (this.y + this.height < this.screenHeight) {
            this.y += this.speed;
        }
    }
    draw() {
        raylib_1.default.DrawRectangle(this.x, this.y, this.width, this.height, raylib_1.default.WHITE);
    }
}
exports.Paddle = Paddle;
//# sourceMappingURL=paddle.js.map