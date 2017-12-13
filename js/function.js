/**
 * @file: function.js
 * @author: Gruppo 7
 * @members:
  - Lorenzo Bergamasco
  - Stefano Pedroli
  - Amedeo Martello
  - Alessando Oppedisano
 * @lesson: 17 - More jQuery
 * @numberOfTheExercise: 1
 * @exerciseTitle: Weather Station
 */

//RAIN EFFECT
//Creates the rain
function rain(canvas) {

 var c = canvas;
 ctx = c.getContext("2d");

 c.width = innerWidth;
 c.height = innerHeight;

 var lines = [],
     maxSpeed = 20,
     spacing = 5,
     xSpacing = 0,
     n = innerWidth / spacing,
     colors = ["#3B8686", "#79BD9A",
      "#A8DBA8", "#0B486B"],
     i;

 for (i = 0; i < n; i++){
   xSpacing += spacing;
   lines.push({
     x: xSpacing,
     y: Math.round(Math.random()*c.height),
     width: 2,
     height: Math.round(Math.random()*(innerHeight/60)),
     speed: Math.random()*maxSpeed + 1,
     color: colors[Math.floor(Math.random() * colors.length)]
   });
 }

//Function that help the canvas, drawing it
function draw(){
   var i;
   ctx.clearRect(0, 0,c.width,c.height);

   for (i = 0; i < n; i++){
     ctx.fillStyle = lines[i].color;
     ctx.fillRect(lines[i].x, lines[i].y,
       lines[i].width, lines[i].height);
     lines[i].y += lines[i].speed;

     if (lines[i].y > c.height)
       lines[i].y = 0 - lines[i].height;
   }
   requestAnimationFrame(draw);
 }
 draw();
}


//Function that creates snow falling effect
function snow(canvas){
   var canvas = canvas;
   var ctx = canvas.getContext('2d');
   var flakeArray = [];

//Resize the size of canvans
   function canvasResize(){
       canvas.height = canvas.offsetHeight;
       canvas.width = canvas.offsetWidth;
   }
   canvasResize();

   window.onresize = function() {
       canvasResize();
   };

   var MyMath = Math;

   var stopSnow = setInterval(function() {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.beginPath();

       var random = MyMath.random();
       var distance = 0.05 + 0.95 * random;

       var flake = {};
       flake.x = 1.5 * canvas.width * MyMath.random()
        - 0.5 * canvas.width;
       flake.y = -9;
       flake.velX = 2 * distance * (MyMath.random() / 2 + 0.5);
       flake.velY = (4 + 2 * MyMath.random()) * distance;
       flake.radius = MyMath.pow(5 * random, 2) / 5;
       flake.update = function() {
           var t = this;
           t.x += t.velX;
           t.y += t.velY;
           ctx.beginPath();
           ctx.arc(t.x, t.y, t.radius, 0, 2 * MyMath.PI, !1);
           ctx.fillStyle = '#FFF';
           ctx.fill();
       };

       flakeArray.push(flake);

       for (var b = 0; b < flakeArray.length; b++) {
           if (flakeArray[b].y > canvas.height) {
               flakeArray.splice(b, 1);
           } else {
               flakeArray[b].update();
           }
       }
   }, 16);
}

//Star animation function
function stars(canvas) {
   //Helpers
   function lineToAngle(x1, y1, length, radians) {
       var x2 = x1 + length * Math.cos(radians),
           y2 = y1 + length * Math.sin(radians);
       return { x: x2, y: y2 };
   }

   function randomRange(min, max) {
       return min + Math.random() * (max - min);
   }

   function degreesToRads(degrees) {
       return degrees / 180 * Math.PI;
   }

   //Particle (star)
   var particle = {
       x: 0,
       y: 0,
       vx: 0,
       vy: 0,
       radius: 0,

       create: function(x, y, speed, direction) {
           var obj = Object.create(this);
           obj.x = x;
           obj.y = y;
           obj.vx = Math.cos(direction) * speed;
           obj.vy = Math.sin(direction) * speed;
           return obj;
       },
       getSpeed: function() {
           return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
       },
       setSpeed: function(speed) {
           var heading = this.getHeading();
           this.vx = Math.cos(heading) * speed;
           this.vy = Math.sin(heading) * speed;
       },
       getHeading: function() {
           return Math.atan2(this.vy, this.vx);
       },
       setHeading: function(heading) {
           var speed = this.getSpeed();
           this.vx = Math.cos(heading) * speed;
           this.vy = Math.sin(heading) * speed;
       },
       update: function() {
           this.x += this.vx;
           this.y += this.vy;
       }
   };

   //Canvas and Settings
   var canvas = canvas,
       context = canvas.getContext("2d"),
       width = canvas.width = window.innerWidth,
       height = canvas.height = window.innerHeight,
       stars = [],
       shootingStars = [],
       layers = [
           { speed: 0.015, scale: 0.2, count: 320 },
           { speed: 0.03, scale: 0.5, count: 50 },
           { speed: 0.05, scale: 0.75, count: 30 }
       ],
       starsAngle = 145,
       shootingStarSpeed = {
           min: 15,
           max: 20
       },
       shootingStarOpacityDelta = 0.01,
       trailLengthDelta = 0.01,
       shootingStarEmittingInterval = 2000,
       shootingStarLifeTime = 500,
       maxTrailLength = 300,
       starBaseRadius = 2,
       shootingStarRadius = 3,
       paused = false;

   //Creation of all Stars
   for (var j = 0; j < layers.length; j += 1) {
       var layer = layers[j];
       for (var i = 0; i < layer.count; i += 1) {
           var star = particle.create(randomRange(0, width),
            randomRange(0, height), 0, 0);
           star.radius = starBaseRadius * layer.scale;
           star.setSpeed(layer.speed);
           star.setHeading(degreesToRads(starsAngle));
           stars.push(star);
       }
   }
   //Creates the shooting Star
   function createShootingStar() {
       var shootingStar = particle.create(randomRange(width / 2, width),
        randomRange(0, height / 2), 0, 0);
       shootingStar.setSpeed(randomRange(shootingStarSpeed.min,
         shootingStarSpeed.max));
       shootingStar.setHeading(degreesToRads(starsAngle));
       shootingStar.radius = shootingStarRadius;
       shootingStar.opacity = 0;
       shootingStar.trailLengthDelta = 0;
       shootingStar.isSpawning = true;
       shootingStar.isDying = false;
       shootingStars.push(shootingStar);
   }


   //Stops the shooting Star effect
   function killShootingStar(shootingStar) {
       setTimeout(function() {
           shootingStar.isDying = true;
       }, shootingStarLifeTime);
   }

   function update() {
       if (!paused) {
           context.clearRect(0, 0, width, height);
           context.fill();

           for (var i = 0; i < stars.length; i += 1) {
               var star = stars[i];
               star.update();
               drawStar(star);
               if (star.x > width) {
                   star.x = 0;
               }
               if (star.x < 0) {
                   star.x = width;
               }
               if (star.y > height) {
                   star.y = 0;
               }
               if (star.y < 0) {
                   star.y = height;
               }
           }

           for (i = 0; i < shootingStars.length; i += 1) {
               var shootingStar = shootingStars[i];
               if (shootingStar.isSpawning) {
                   shootingStar.opacity += shootingStarOpacityDelta;
                   if (shootingStar.opacity >= 1.0) {
                       shootingStar.isSpawning = false;
                       killShootingStar(shootingStar);
                   }
               }
               if (shootingStar.isDying) {
                   shootingStar.opacity -= shootingStarOpacityDelta;
                   if (shootingStar.opacity <= 0.0) {
                       shootingStar.isDying = false;
                       shootingStar.isDead = true;
                   }
               }
               shootingStar.trailLengthDelta += trailLengthDelta;

               shootingStar.update();
               if (shootingStar.opacity > 0.0) {
                   drawShootingStar(shootingStar);
               }
           }

           //Delete dead shooting shootingStars
           for (i = shootingStars.length -1; i >= 0 ; i--){
               if (shootingStars[i].isDead){
                   shootingStars.splice(i, 1);
               }
           }
       }
       requestAnimationFrame(update);
   }

   //Draws the star
   function drawStar(star) {
       context.fillStyle = "#ffeece";
       context.beginPath();
       context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
       context.fill();
   }

   //Draws the shooting Star
   function drawShootingStar(p) {
       var x = p.x,
           y = p.y,
           currentTrailLength = (maxTrailLength * p.trailLengthDelta),
           pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

       context.fillStyle = "rgba(255, 255, 255, " + p.opacity + ")";
       var starLength = 5;
       context.beginPath();
       context.moveTo(x - 1, y + 1);

       context.lineTo(x, y + starLength);
       context.lineTo(x + 1, y + 1);

       context.lineTo(x + starLength, y);
       context.lineTo(x + 1, y - 1);

       context.lineTo(x, y + 1);
       context.lineTo(x, y - starLength);

       context.lineTo(x - 1, y - 1);
       context.lineTo(x - starLength, y);

       context.lineTo(x - 1, y + 1);
       context.lineTo(x - starLength, y);

       context.closePath();
       context.fill();

       //trail of shooting Stars
       context.fillStyle = "rgba(255, 221, 157, " + p.opacity + ")";
       context.beginPath();
       context.moveTo(x - 1, y - 1);
       context.lineTo(pos.x, pos.y);
       context.lineTo(x + 1, y + 1);
       context.closePath();
       context.fill();
   }

   //Run animation
   update();

   //Start Shooting stars
   setInterval(function() {
       if (paused) return;
       createShootingStar();
   }, shootingStarEmittingInterval);

   window.onfocus = function () {
     paused = false;
   };

   window.onblur = function () {
     paused = true;
   };

}
