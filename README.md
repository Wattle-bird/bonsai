# Bonsai, a Javascript Playground for mobile

**See it live:** https://wattle-bird.github.io/bonsai/


## Documentation
See index.html and library.js for more details


### CSS
- `.contain`
  - Uses `object-fit` to fit within the display cozily.
- `.hide`
  - `display: none`
- `.crisp`
  - make your canvas/image pixels crisp


### JS
- `$`
  - shorthand for `document.querySelector`
- `class FrameBuffer(width, height)`
  - Pixel color is 32 bit numbers: 0xAABBGGRR
  - `get(x,y)`
  - `set(x,y,color)`
  - `shade((x,y) => color)`
  - `update()`
- `rgb2int(r,g,b,a)`
  - `a` is optional, defaults to 0xff
  - returned format is 0xAABBGGRR


### HTML
- `#display`
- `#editor`
- `#toolbar`



## Licence

MIT