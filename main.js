var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_X, last_position_of_Y;
var color = document.getElementById("colorinput").value;
var width_of_line = document.getElementById("widthinput").value;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    var current_position_of_mouseX = e.clientX - canvas.offsetLeft;
    var current_position_of_mouseY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        color = document.getElementById("colorinput").value;
        width_of_line = document.getElementById("widthinput").value;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y coordinates is:X=" + last_position_of_X + "Y=" + last_position_of_Y);
        ctx.moveTo(last_position_of_X, last_position_of_Y)
        console.log("current position of x and y coordinates is:X=" + current_position_of_mouseX + "Y=" + current_position_of_mouseY);
        ctx.lineTo(current_position_of_mouseX, current_position_of_mouseY);
        ctx.stroke();
    }
    last_position_of_X = current_position_of_mouseX;
    last_position_of_Y = current_position_of_mouseY;



}