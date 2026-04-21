const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clearBtn");
const colorPicker = document.getElementById("colorPicker");

canvas.width = 600;
canvas.height = 400;

let isDrawing = false;

ctx.strokeStyle = colorPicker.value;

canvas.addEventListener("mousedown", function(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", function(e) {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", function() {
    isDrawing = false;
});

canvas.addEventListener("mouseleave", function() {
    isDrawing = false;
});

clearBtn.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorPicker.addEventListener("input", function() {
    ctx.strokeStyle = colorPicker.value;
});