console.clear();
var canvas = document.createElement("canvas"),
  ctx = canvas.getContext("2d"),
  width = (canvas.width =300),
  halfWidth = width / 5,
  height = (canvas.height = 450),
  halfHeight = height / 2;

document.body.appendChild(canvas);

var lineCount = 100,
  color = "#575c96",
  offset = Math.PI * 1.6;

ctx.shadowBlur = 4;
ctx.shadowColor = color;
ctx.fillStyle = color;

/*////////////////////////////////////////*/

function Line(pos) {
  this.pos = pos;
}

Line.prototype = {
  constructor: Line,
  pos: 0,
  width: halfWidth,
  height: 8,
  range: halfHeight * 0.8,

  render: function (ctx, delta) {
    var pos = this.pos;
    //delta < Math.PI ? Math.sin(delta * 0.5) : 1;
    //Math.abs( Math.sin( delta + this.pos) ) ;
    //this.pos;
    //Math.sin(delta + (this.pos*Math.PI));
    //  ( delta < Math.PI ? Math.sin(delta * 0.5) : 1);
    //Math.abs( Math.sin( delta + this.pos) ) ;

    var minWidth = this.width * 0.1;
    //    var lineWidth = minWidth + this.width * 0.1 * pos;
    var lineWidth = minWidth + this.width * 0.0001 * pos;
    var lineHeight = Math.cos(delta + pos * offset) * this.height;
    var x = (width - minWidth) * (1 - pos);
    var y =
      Math.sin(delta + pos * offset) *
        (this.range / 2 + (this.range / 2) * pos) +
      halfHeight;

    ctx.globalAlpha = 0.4 + 0.64 * (1 - pos);
    ctx.beginPath();
    ctx.rect(x, y, lineWidth, lineHeight);
    ctx.quadraticCurveTo(x+2, y+10, lineWidth, lineHeight);
  

    ctx.closePath();
    ctx.fill();
  },
};

var lines = [];

for (var i = 0; i < lineCount; i++) {
  lines.push(new Line(i / lineCount));
}

var wave = 0;

function render() {
  requestAnimationFrame(render);
  wave += 0.02;

  ctx.clearRect(0, 0, width, height);
  lines.forEach(function (line) {
    line.render(ctx, wave);
  });
}

render();
