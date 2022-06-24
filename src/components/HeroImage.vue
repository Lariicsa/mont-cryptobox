<template>
  <div class="heroimage">
    <canvas id="heroImage"></canvas>
    <div class="column heroimage__content">
      <h1 class="heroimage__title">{{ title }}</h1>
      <p class="heroimage__text" v-html="text"></p>
    </div>
    <div class="row heroimage__image"></div>
  </div>
</template>
<script>
//import WAVE from "../utils/index";
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
    var c = document.getElementById("heroImage");
    var $ = c.getContext("2d");

    var w = (c.width = window.innerWidth);
    var h = (c.height = window.innerHeight);

    var draw = function (a, b, t) {
      $.lineWidth = 0.2;
      $.fillStyle = "hsla(277, 95%, 55%, 1)";
      $.clearRect(0, 0, c.width, c.height);
      for (var i = -60; i < 60; i += 1) {
        $.strokeStyle = "hsl(265, 23%, 46%, 0.8)";
        $.beginPath();
        $.moveTo(0, h / 2);
        for (var j = 0; j < w; j += 10) {
          $.lineTo(
            18 * Math.sin(i / 10) + j + 0.008 * j * j,
            Math.floor(
              h / 2 +
                (j / 2) * Math.cos(j / 50 - t / 50 - i / 118) +
                i * 0.9 * Math.sin(j / 25 - (i + t) / 65)
            )
          );
        }
        $.stroke();
      }
    };
    var t = 0;

    window.addEventListener(
      "resize",
      function () {
        c.width = w = window.innerWidth;
        c.height = h = window.innerHeight;
        // $.fillStyle = "hsla(277, 95%, 55%, 1)";
      },
      false
    );

    var run = function () {
      window.requestAnimationFrame(run);
      t += 2;
      draw(33, 52 * Math.sin(t / 1200), t);
    };

    run();
  },
};
</script>