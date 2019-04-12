# canvas-retina

you can see the HD canvas

## use for

[source1 -->](https://github.com/nicoleffect/point-plot)
[source2-->](https://github.com/nicoleffect/simple-circle-progress)

## examples

```
// html
<canvas id="canvas"></canvas>
```
```
// npm install canvas-retina
import canvasRetina from 'canvas-retina'

const {
  pixelRatio, // value of devicePixelRatio / backingStore, if you need this
  ctx, // object of canvas dom getContext('2d'), if you need this
  rect // object of canvas dom getBoundingClientRect(), if you need this
} = canvasRetina(document.getElementById('canvas'))

```
```
// or
<script src="https://github.com/nicoleffect/canvas-retina/dist/canvas-retina.iife.min.js"></script>

canvasRetina(document.getElementById('canvas'))

```

## all modes
```
amd、cjs、es、iife、umd
```
