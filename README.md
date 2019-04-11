# canvas-retina

you can see the HD canvas

use for

[source -->](https://github.com/nicoleffect/point-plot)
[source -->](https://github.com/nicoleffect/simple-circle-progress)

## mode

```
amd、cjs、es、iife、umd
```

## examples

```
// html
<canvas id="canvas"></canvas>
```
```
// js

// npm install canvas-retina
import canvasRetina from 'canvas-retina'

const {
  ctx, // object of canvas dom getContext('2d'), if you need this
  rect // object of canvas dom getBoundingClientRect(), if you need this
} = canvasRetina(document.getElementById('canvas))

```
```
// or
<script src="https://github.com/nicoleffect/canvas-retina/dist/canvas-retina.iife.min.js"></script>
canvasRetina(document.getElementById('canvas))
```
