var canvas;
var ctx;
var x = 600;
var y = 300;
var mx = 2;
var my = 4;
var width = 600;
var height = 300;

function init() {
	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');
	return setInterval(draw, 10);
}

function clear() {

}

function draw() {

}

init();