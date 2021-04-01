<template>
  <section>
    <div id="canvas"></div>
  </section>
</template>

<script>
import P5 from 'p5';

export default {
  name: 'Display',
  data() {
    return {
      p5: P5
    };
  },
  mounted() {
    this.p5 = new P5(p5 => {
      p5.setup = this.setup;
      p5.draw = this.draw;
    }, this.canvas);
  },
  methods: {
    setup() {
      this.p5.createCanvas(this.width, this.height);
      this.p5.background('#FFF');
      this.p5.stroke('#000');
      this.p5.strokeWeight(5);
    },
    draw() {
      if (this.p5.mouseIsPressed) {
        this.p5.line(this.p5.pmouseX, this.p5.pmouseY, this.p5.mouseX, this.p5.mouseY);
      }
    }
  },
  computed: {
    ratio() {
      return 16 / 9;
    },
    width() {
      return this.height * this.ratio;
    },
    height() {
      return document.querySelector('#canvas').clientHeight * 0.8;
    },
    canvas() {
      return document.getElementById('canvas');
    }
  }
};
</script>

<style>
#canvas {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
