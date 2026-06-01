import raylib, { KEY_DOWN, KEY_S, KEY_UP, KEY_W } from 'raylib';
import { Paddle } from './paddle';
import { Ball } from './ball';

export class Game {
    windowWidth: number;
    windowHeight: number;
    windowTitle: string;
    gameFPSTarget: number;
    paddleOne: Paddle;
    paddleTwo: Paddle;
    ball: Ball;

    private ballVelocity: number;
    private velocityMultiplier: number;

    constructor(windowWidth: number, windowHeight: number, windowTitle: string, gameFPSTarget: number) {
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.windowTitle = windowTitle;
        this.gameFPSTarget = gameFPSTarget;
        this.ballVelocity = 5;
        this.velocityMultiplier = 0.02;

        this.paddleOne = new Paddle(10, 6, windowHeight);
        this.paddleTwo = new Paddle(windowWidth - 30, 6, windowHeight);

        this.ball = new Ball(this.windowWidth / 2, this.windowHeight / 2, 10, this.ballVelocity, this.ballVelocity, windowHeight);
    }

    moveInput(): void {
        if (raylib.IsKeyDown(KEY_W)) {
            this.paddleOne.moveUp();
        }
        if (raylib.IsKeyDown(KEY_S)) {
            this.paddleOne.moveDown();
        }

        if (raylib.IsKeyDown(KEY_UP)) {
            this.paddleTwo.moveUp();
        }
        if (raylib.IsKeyDown(KEY_DOWN)) {
            this.paddleTwo.moveDown();
        }
    }

    detectCollision(): void {
        const b = this.ball;
        const p1 = this.paddleOne;
        const p2 = this.paddleTwo;

        if (
            b.x - b.size <= p1.x + p1.width &&
            b.x + b.size >= p1.x &&
            b.y + b.size >= p1.y &&
            b.y - b.size <= p1.y + p1.height
        ) {
            this.ball.invertX();
            this.ball.increaseSpeed(this.velocityMultiplier);
        }

        if (
            b.x + b.size >= p2.x &&
            b.x - b.size <= p2.x + p2.width &&
            b.y + b.size >= p2.y &&
            b.y - b.size <= p2.y + p2.height
        ) {
            this.ball.invertX();
            this.ball.increaseSpeed(this.velocityMultiplier);
        }
    }

    verticalCollision(): void {
        const b = this.ball;

        if (b.y - b.size <= 0 || b.y + b.size >= this.windowHeight) {
            this.ball.invertY();
        }
    }

    gameOver(): void {
        const ballX = this.ball.getPosition().x;
        const ballSize = this.ball.size;

        if (ballX - ballSize > this.windowWidth || ballX + ballSize < 0) {
            const randomSpeedX = Math.random() < 0.5 ? this.ballVelocity : -this.ballVelocity;
            const randomSpeedY = Math.random() < 0.5 ? this.ballVelocity : -this.ballVelocity;

            this.ball.reset(this.windowWidth / 2, this.windowHeight / 2, randomSpeedX, randomSpeedY);
        }
    }

    update(): void {
        this.moveInput();
        this.ball.move();
        this.detectCollision();
        this.verticalCollision();
        this.gameOver();
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
            this.ball.draw();
            raylib.EndDrawing();
        }

        raylib.CloseWindow();
    }
}