const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(r.GetScreenWidth(), r.GetScreenHeight(), "myWindow");
    r.SetTargetFPS(60);
}

let rectX = 0;
let speed = 5;
function update() {
    if (rectX + 100 === 1745) {
        speed = -5;
    }
    if (rectX === 0) {
        speed = 5;
    }
    rectX += speed;
}



function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(rectX, 0, 100, r.GetScreenHeight(), r.WHITE);
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};