import drawLevel from './view/draw-level'
import drawLight from './view/draw-light'
import levels from './levels.json'

'use strict';
const root = document.getElementById('root')

// TODO: Make part of the level file
const from = [ 50, 91 ]
const level = levels[ 0 ].shape

registerEventListeners(root, level)
drawLevel(root, level)
updateFavicon(root)

// TODO: Add a game over screen
// TODO: Add a share on Twitter screen
// TODO: Increase attempt on every shoot

function registerEventListeners (root, level) {
  const form = document.getElementById('form')

  form.addEventListener('submit', (event) => onSubmit(event, root, level))
}

function onSubmit (event, root, level) {
  event.preventDefault()
  clearLight()

  const attempt = document.getElementById('attempt')
  attempt.value = parseInt(attempt.value, 10) + 1

  const angle = document.getElementById('angle')
  const radians = degToRad(parseInt(angle.value, 10) - 90)
  const coords = polarToCartesian({ r: 1, degree: radians })
  drawLight(root, level, [ 50, 91 ], coords)
}

function clearLight () {
  const light = document.querySelector('.light')
  if (light) {
    light.remove()
  }
}

function degToRad (deg) {
  /* deg / 180 = x / PI */
  return deg * Math.PI / 180
}

function polarToCartesian (polar) {
  const { r, degree } = polar
  const x = parseFloat((Math.cos(degree) / r).toFixed(2))
  const y = parseFloat((Math.sin(degree) / r).toFixed(2))
  return [ x, y ]
}

function updateFavicon (svg) {
  const icon = document.querySelector('link[rel="icon"]')
  const serializer = new XMLSerializer()
  const str = serializer.serializeToString(svg)
  icon.href = 'data:image/svg+xml;utf8,' + str
}
