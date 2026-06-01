"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paddle = void 0;
const raylib_1 = __importDefault(require("raylib"));
class Paddle {
    y;
    speed;
    constructor(speed) {
        this.y = 0;
        this.speed = speed;
    }
    moveUp() {
        this.y -= this.speed;
    }
    moveDown() {
        this.y += this.speed;
    }
    getPosition() {
        return this.y;
    }
    draw() {
        raylib_1.default.DrawRectangle(0, this.y, 20, 60, raylib_1.default.BLACK);
    }
}
exports.Paddle = Paddle;
//# sourceMappingURL=paddle.js.map