/*!
// Snow.js - v0.0.3
// kurisubrooks.com
*/

// Amount of Snowflakes
var snowMax = 35;

// Snowflake Colours
var snowColor = ["#FFF", "#FFF"];

// Snow Entity
var snowEntity = "&#x2022;";

// Falling Velocity
var snowSpeed = 0.75;

// Minimum Flake Size
var snowMinSize = 8;

// Maximum Flake Size
var snowMaxSize = 24;

// Refresh Rate (in milliseconds)
var snowRefresh = 50;

// Additional Styles
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

// Element
var div = document.getElementsByClassName('snow')[0];
/*
// End of Configuration
// ----------------------------------------
// Do not modify the code below this line
*/

var snow = [],
	pos = [],
	coords = [],
	lefr = [],
	marginBottom,
	marginRight;

function randomise(range) {
	rand = Math.floor(range * Math.random());
	return rand;
}

function initSnow() {
	var snowSize = snowMaxSize - snowMinSize;
	marginBottom = div.scrollHeight - 5;
	console.log(div.scrollHeight + " e " + div.clientWidth);
	marginRight = div.clientWidth - 15;

	for (i = 0; i <= snowMax; i++) {
		coords[i] = 0;
		lefr[i] = Math.random() * 15;
		pos[i] = 0.03 + Math.random() / 10;
		snow[i] = document.getElementById("flake" + i);
		snow[i].style.fontFamily = "inherit";
		snow[i].size = randomise(snowSize) + snowMinSize;
		snow[i].style.fontSize = snow[i].size + "px";
		snow[i].style.color = snowColor[randomise(snowColor.length)];
		snow[i].style.zIndex = 1000;
		snow[i].sink = snowSpeed * snow[i].size / 5;
		snow[i].posX = randomise(marginRight - snow[i].size);
		snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
		/*snow[i].style.left = snow[i].posX + "px";
		snow[i].style.top = snow[i].posY + "px";*/
	}

	moveSnow();
}

function resize() {
	marginBottom = div.scrollHeight - 5;
	marginRight = div.clientWidth - 15;
}

function moveSnow() {
	for (i = 0; i <= snowMax; i++) {
		coords[i] += pos[i];
		snow[i].posY += snow[i].sink;
		snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
		snow[i].style.top = snow[i].posY + "px";

		if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
			snow[i].posX = randomise(marginRight - snow[i].size);
			snow[i].posY = 0;
		}
	}

	setTimeout("moveSnow()", snowRefresh);
}

for (i = 0; i <= snowMax; i++) {
	$( ".snow" ).append( "<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>" );
	//div.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
}

div.onresize = resize;
div.onload = initSnow;


/*** OUR VERSION OF SNOWING EFFECT ***/
//WARNING: NOT yet implemented

//rain();
//createSnow(150);
//loop();

// SNOW EFFECT

/*
var canvas = document.getElementById('snow'),
   ctx = canvas.getContext('2d'),
   width = ctx.canvas.width = canvas.offsetWidth,
   height = ctx.canvas.height = canvas.offsetHeight,
   animFrame = window.requestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.msRequestAnimationFrame,
   snowflakes = [];

window.onresize = function() {
 width = ctx.canvas.width = canvas.offsetWidth;
 height = ctx.canvas.height = canvas.offsetHeight;

 for (var i = 0; i < snowflakes.length; i++) {
   snowflakes[i].resized();
 }
}

function update() {
 for (var i = 0; i < snowflakes.length; i++) {
   snowflakes[i].update();
 }
}

function Snow() {
 this.x = random(0, width);
 this.y = random(-height, 0);
 this.radius = random(0.5, 3.0);
 this.speed = random(1, 3);
 this.wind = random(-0.5, 3.0);
 this.isResized = false;

 this.updateData = function () {
   this.x = random(0, width);
   this.y = random(-height, 0);
 }

 this.resized = function () {
   this.isResized = true;
 }
}

Snow.prototype.draw = function() {
 ctx.beginPath();
 ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
 ctx.fillStyle = '#fff';
 ctx.fill();
 ctx.closePath();
}

Snow.prototype.update = function() {
 this.y += this.speed;
 this.x += this.wind;

 if (this.y > ctx.canvas.height) {
   if (this.isResized) {
     this.updateData();
     this.isResized = false;
   } else {
     this.y = 0;
     this.x = random(0, width);
   }
 }
}

function createSnow(count) {
 for (var i = 0; i < count; i++) {
   snowflakes[i] = new Snow();
 }
}

function draw() {
 ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 for (var i = 0; i < snowflakes.length; i++) {
   snowflakes[i].draw();
 }
}

function loop() {
 draw();
 update();
 animFrame(loop);
}

function random(min, max) {
 var rand = (min + Math.random() * (max - min)).toFixed(1);
 rand = Math.round(rand);
 return rand;
}

createSnow(150);
loop();
*/
