"use strict";
const $ = (selector) => {
    const elements = document.querySelectorAll(selector);
    return elements.length > 1 ? [...elements] : elements[0];
};
const $chart = $('#chart');
const ctx = $chart.getContext('2d'); // 지원하지 않는 브라우저가 있을 수 있었음;
function drawArc({ ctx, startX, startY, endX, endY, }) {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}
// drawArc({
//   ctx,
//   startX: 0,
//   startY: 0,
//   endX: 100,
//   endY: 100,
// })
/* 사각형 그리기 */
function drawRect(ctx) {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgb(0, 0, 200, .5)';
    ctx.fillRect(30, 30, 50, 50);
}
// drawRect(ctx);
/* 경로그리기 */
function drawTriangle(ctx) {
    ctx.beginPath();
    // Q. moveTo, lineTo 차이가??
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}
// drawTriangle(ctx);
function drawSmile(ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
}
drawSmile(ctx);
