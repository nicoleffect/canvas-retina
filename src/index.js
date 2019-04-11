function getPixelRatio (ctx) {
  var backingStore = ctx.backingStorePixelRatio ||
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1
  return (window.devicePixelRatio || 1) / backingStore
}
function canvasRetina (canvas) {
  const rect = canvas.getBoundingClientRect()
  const width = rect.width
  const height = rect.height
  const ctx = canvas.getContext('2d')
  const pixelRatio = getPixelRatio(ctx)
  canvas.width = width * pixelRatio
  canvas.height = height * pixelRatio
  ctx.scale(pixelRatio, pixelRatio)
  ctx.translate(1 / pixelRatio, 1 / pixelRatio)
  return {
    ctx,
    rect
  }
}
export default canvasRetina
