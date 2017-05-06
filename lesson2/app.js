var mortar = new Image();
mortar.src = "mortar_trash.png";
var sparky = new Image();
sparky.src = "sparky.png";
var inferno = new Image();
inferno.src = "inferno.png";

var c = document.getElementById('scene');
var ctx = c.getContext('2d');

mortar.onload = function() {
	ctx.drawImage(mortar, 0, 0, 800, 500)
}

sparky.onload = function() {
	ctx.drawImage(sparky, 100, 100, 210, 250)
}

inferno.onload = function() {
	ctx.drawImage(inferno, 400, 200, 210, 250)
}