"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ball = void 0;
const raylib_1 = __importDefault(require("raylib"));
class Ball {
    x;
    y;
    size;
    speedX;
    speedY;
    screenHeight;
    constructor(x, y, size, speedX, speedY, screenHeight) {
        this.x = x;
        this.y = screenHeight / 2 - 30;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.screenHeight = screenHeight;
    }
    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        raylib_1.default.DrawCircle(this.x, this.y, this.size, raylib_1.default.WHITE);
    }
    reset(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
    invertX() {
        this.speedX = -this.speedX;
    }
    invertY() {
        this.speedY = -this.speedY;
    }
    increaseSpeed(multiplier) {
        this.speedX += this.speedX * multiplier;
        this.speedY += this.speedY * multiplier;
    }
}
exports.Ball = Ball;
//# sourceMappingURL=ball.js.map