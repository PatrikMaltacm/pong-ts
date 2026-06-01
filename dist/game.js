"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const raylib_1 = __importStar(require("raylib"));
const paddle_1 = require("./paddle");
const ball_1 = require("./ball");
class Game {
    windowWidth;
    windowHeight;
    windowTitle;
    gameFPSTarget;
    paddleOne;
    paddleTwo;
    ball;
    ballVelocity;
    velocityMultiplier;
    constructor(windowWidth, windowHeight, windowTitle, gameFPSTarget) {
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.windowTitle = windowTitle;
        this.gameFPSTarget = gameFPSTarget;
        this.ballVelocity = 5;
        this.velocityMultiplier = 0.02;
        this.paddleOne = new paddle_1.Paddle(10, 6, windowHeight);
        this.paddleTwo = new paddle_1.Paddle(windowWidth - 30, 6, windowHeight);
        this.ball = new ball_1.Ball(this.windowWidth / 2, this.windowHeight / 2, 10, this.ballVelocity, this.ballVelocity, windowHeight);
    }
    moveInput() {
        if (raylib_1.default.IsKeyDown(raylib_1.KEY_W)) {
            this.paddleOne.moveUp();
        }
        if (raylib_1.default.IsKeyDown(raylib_1.KEY_S)) {
            this.paddleOne.moveDown();
        }
        if (raylib_1.default.IsKeyDown(raylib_1.KEY_UP)) {
            this.paddleTwo.moveUp();
        }
        if (raylib_1.default.IsKeyDown(raylib_1.KEY_DOWN)) {
            this.paddleTwo.moveDown();
        }
    }
    detectCollision() {
        const b = this.ball;
        const p1 = this.paddleOne;
        const p2 = this.paddleTwo;
        if (b.x - b.size <= p1.x + p1.width &&
            b.x + b.size >= p1.x &&
            b.y + b.size >= p1.y &&
            b.y - b.size <= p1.y + p1.height) {
            this.ball.invertX();
            this.ball.increaseSpeed(this.velocityMultiplier);
        }
        if (b.x + b.size >= p2.x &&
            b.x - b.size <= p2.x + p2.width &&
            b.y + b.size >= p2.y &&
            b.y - b.size <= p2.y + p2.height) {
            this.ball.invertX();
            this.ball.increaseSpeed(this.velocityMultiplier);
        }
    }
    verticalCollision() {
        const b = this.ball;
        if (b.y - b.size <= 0 || b.y + b.size >= this.windowHeight) {
            this.ball.invertY();
        }
    }
    gameOver() {
        const ballX = this.ball.getPosition().x;
        const ballSize = this.ball.size;
        if (ballX - ballSize > this.windowWidth || ballX + ballSize < 0) {
            const randomSpeedX = Math.random() < 0.5 ? this.ballVelocity : -this.ballVelocity;
            const randomSpeedY = Math.random() < 0.5 ? this.ballVelocity : -this.ballVelocity;
            this.ball.reset(this.windowWidth / 2, this.windowHeight / 2, randomSpeedX, randomSpeedY);
        }
    }
    update() {
        this.moveInput();
        this.ball.move();
        this.detectCollision();
        this.verticalCollision();
        this.gameOver();
    }
    initGame() {
        raylib_1.default.InitWindow(this.windowWidth, this.windowHeight, this.windowTitle);
        raylib_1.default.SetTargetFPS(this.gameFPSTarget);
        while (!raylib_1.default.WindowShouldClose()) {
            this.update();
            raylib_1.default.BeginDrawing();
            raylib_1.default.ClearBackground(raylib_1.default.BLACK);
            this.paddleOne.draw();
            this.paddleTwo.draw();
            this.ball.draw();
            raylib_1.default.EndDrawing();
        }
        raylib_1.default.CloseWindow();
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map