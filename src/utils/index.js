console.clear();
var canvas = document.createElement("canvas");
//ctx = c.getContext("2d"),
// width = (c.width = 1000),
// halfWidth = width / 5,
// height = (c.height = 450),
// halfHeight = height / 2;

document.body.appendChild(canvas);
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (/* function */ callback) {
     // window.setTimeout(callback, 1000 / 50);
    }
  );
})();


var context = canvas.getContext("2d");

//get DPI
let dpi = window.devicePixelRatio || 6;
context.scale(dpi, dpi);
console.log(dpi);

function fix_dpi() {
  //get CSS height
  //the + prefix casts it to an integer
  //the slice method gets rid of "px"
  let style_height = +getComputedStyle(canvas)
    .getPropertyValue("height")
    .slice(0, -2);
  let style_width = +getComputedStyle(canvas)
    .getPropertyValue("width")
    .slice(0, -2);

  //scale the canvas
  canvas.setAttribute("height", style_height * dpi);
  canvas.setAttribute("width", style_width * dpi);
}

var particle_count = 70,
  particles = [],
  couleurs = ["#3a0088", "#930077", "#f2f7f7", "#ffc835"];
function Particle() {
  this.radius = Math.round(Math.random() * 3 + 5);
  this.x = Math.floor(
    Math.random() *
      (+getComputedStyle(canvas).getPropertyValue("width").slice(0, -2) * dpi -
        this.radius +
        1) +
      this.radius
  );
  this.y = Math.floor(
    Math.random() *
      (+getComputedStyle(canvas).getPropertyValue("height").slice(0, -2) * dpi -
        this.radius +
        1) +
      this.radius
  );
  this.color = couleurs[Math.floor(Math.random() * couleurs.length)];
  this.speedx = Math.round(Math.random() * 201 + 0) / 10;
  this.speedy = Math.round(Math.random() * 201 + 0) / 10;

  switch (Math.round(Math.random() * couleurs.length)) {
    case 1:
      this.speedx *= 1;
      this.speedy *= 1;
      break;
    case 2:
      this.speedx *= -1;
      this.speedy *= 1;
      break;
    case 3:
      this.speedx *= 1;
      this.speedy *= -1;
      break;
    case 4:
      this.speedx *= -1;
      this.speedy *= -1;
      break;
  }

  this.move = function () {
    context.beginPath();
    context.globalCompositeOperation = "source-over";
    context.fillStyle = this.color;
    context.globalAlpha = 1;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fill();
    context.closePath();

    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;

    if (this.x <= 0 + this.radius) {
      this.speedx *= -1;
    }
    if (this.x >= canvas.width - this.radius) {
      this.speedx *= -1;
    }
    if (this.y <= 0 + this.radius) {
      this.speedy *= -1;
    }
    if (this.y >= canvas.height - this.radius) {
      this.speedy *= -1;
    }

    for (var j = 0; j < particle_count; j++) {
      var particleActuelle = particles[j],
        yd = particleActuelle.y - this.y,
        xd = particleActuelle.x - this.x,
        d = Math.sqrt(xd * xd + yd * yd);

      if (d < 200) {
        context.beginPath();
        context.globalAlpha = (200 - d) / (200 - 0);
        context.globalCompositeOperation = "destination-over";
        context.lineWidth = 1;
        context.moveTo(this.x, this.y);
        context.lineTo(particleActuelle.x, particleActuelle.y);
        context.strokeStyle = this.color;
        context.lineCap = "round";
        context.stroke();
        context.closePath();
      }
    }
  };
}
for (var i = 0; i < particle_count; i++) {
  fix_dpi();
  var particle = new Particle();
  particles.push(particle);
}

function animate() {
  fix_dpi();
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particle_count; i++) {
    particles[i].move();
  }
  requestAnimFrame(animate);
}

animate();
