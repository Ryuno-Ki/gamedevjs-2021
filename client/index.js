'use strict';
const root = document.getElementById('root')
const light = document.getElementById('light')
const path = drawLight(root)
setTimeout(() => path.style.strokeDashoffset = '0', 500)

function drawLight (root) {
  const d = 'M16,91 v-74 h13 v26 h10 v25 h11 v20'
  const fill = 'none'
  const stroke = 'orange'
  const path = svg('path', [ 'light' ], { d, fill, stroke, 'stroke-width': 1 })
  // c.f. https://jakearchibald.com/2013/animated-line-drawing-svg/#animating-it
  const length = path.getTotalLength()
  path.style.strokeDasharray = `${length} ${length}`
  path.style.strokeDashoffset = length
  path.getBoundingClientRect()
  path.style.transition = 'stroke-dashoffset 1s linear'
  root.appendChild(path)
  return path
}

function svg (tag, classes = [], attrs = {}) {
  const ns = 'http://www.w3.org/2000/svg'
  const element = document.createElementNS(ns, tag)

  classes.forEach((cls) => {
    element.classList.add(cls)
  })

  for (let [key, value] of Object.entries(attrs)) {
    element.setAttribute(key, value)
  }

  return element
}
