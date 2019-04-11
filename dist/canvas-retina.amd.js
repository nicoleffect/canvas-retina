/*!
 * canvas-retina v1.0.0
 * (c) 2019 Nicole Wong
 * Released under the MIT License.
 */

/*
 * github: https://github.com/nicoleffect/canvas-retina
 * demo: https://github.com/nicoleffect/canvas-retina
 */
define(function () { 'use strict';

  function getPixelRatio(ctx) {
    var backingStore = ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
  }

  function canvasRetina(canvas) {
    var rect = canvas.getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var ctx = canvas.getContext('2d');
    var pixelRatio = getPixelRatio(ctx);
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);
    ctx.translate(1 / pixelRatio, 1 / pixelRatio);
    return {
      ctx: ctx,
      rect: rect
    };
  }

  return canvasRetina;

});
