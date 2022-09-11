let $ = document.querySelector.bind(document);

class FrameBuffer {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
    this.imageData = this.ctx.createImageData(this.width, this.height);
    this.data = new Uint32Array(this.imageData.data.buffer);
  }

  get(x, y) {
    return this.data[y * this.width + x];
  }

  set(x, y, value) {
    this.data[y * this.width + x] = value;
  }

  shade(algorithm) {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.set(x, y, algorithm(x, y));
      }
    }
  }

  update() {
    this.ctx.putImageData(this.imageData, 0, 0);
  }
}

function rgb2int(r, g, b, a) {
  if (a === undefined) a = 0xff;
  return a * 2**24 + b * 2**16 + g * 2**8 + r;
}