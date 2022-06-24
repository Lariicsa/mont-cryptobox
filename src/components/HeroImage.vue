<template>
  <div id="heroImage" class="heroimage">
    <div class="column heroimage__content">
      <h1 class="heroimage__title">{{ title }}</h1>
      <p class="heroimage__text" v-html="text"></p>
    </div>
    <div class="row heroimage__image"></div>
  </div>
</template>
<script>
//import WAVE from "../utils/index";
import HeroImage from "@/components/HeroImage";
export default {
  name: "HeroImage",
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },

  mounted() {
    console.clear();
    let HERO_IMAGE = document.querySelector("#heroImage");
    let C_HEIGHT = HERO_IMAGE.offsetHeight;
    let C_WIDTH = HERO_IMAGE.offsetWidth;
    console.log(C_WIDTH);
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      width = (canvas.width = this.canvasWidth),
      halfWidth = width / 8,
      height = (canvas.height = 2000),
      halfHeight = height / 2;

    HERO_IMAGE.appendChild(canvas);

    var lineCount = 16,
      color = "#575c96",
      offset = Math.PI * 1.6;

    ctx.shadowBlur = 14;
    ctx.shadowColor = color;
    ctx.fillStyle = color;

    function Line(pos) {
      this.pos = pos;
    }

    Line.prototype = {
      constructor: Line,
      pos: -10,
      width: halfWidth,
      height: 4,
      range: halfHeight * 0.9,

      render: function (ctx, delta) {
        var pos = this.pos;

        var minWidth = this.width * 0.1;
        var lineWidth = minWidth + this.width * 0.002 * pos;
        var lineHeight = Math.sin(delta + pos * offset) * this.height;
        var x = (width - minWidth) * (1 - pos);
        var y =
          Math.sin(delta + pos * offset) *
            -(this.range / 2 - this.range * 2 * pos) +
          halfHeight;
        ctx.globalAlpha = 0.4 + 0.64 * (1 - pos);
        ctx.beginPath();
        ctx.rect(x, y, lineWidth, lineHeight);
        ctx.quadraticCurveTo(x + 1, y + 10, lineWidth, lineHeight);

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
      wave += 0.006;

      ctx.clearRect(0, 0, width, height);
      lines.forEach(function (line) {
        line.render(ctx, wave);
      });
    }

    render();
  },

  computed: {
    canvasWidth() {
      let HERO_IMAGE = document.querySelector("#heroImage");
      return HERO_IMAGE.offsetHeight * 10;
    },
  },
};
</script>