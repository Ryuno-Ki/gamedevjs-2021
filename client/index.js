'use strict';
const root = document.getElementById('root')
const light = document.getElementById('light')
drawLevel(root)
drawLight(root)

function drawLevel (root) {
  const points = [
    [ 15, 90 ],
    [ 11, 90 ],
    [ 11, 20 ],
    [ 21, 10 ],
    [ 27, 10 ],
    [ 51, 70 ],
    [ 55, 70 ],
    [ 79, 10 ],
    [ 85, 10 ],
    [ 95, 20 ],
    [ 95, 90 ],
    [ 85, 90 ],
    [ 85, 24 ],
    [ 59, 89 ],
    [ 47, 89 ],
    [ 21, 24 ],
    [ 21, 90 ],
    [ 17, 90 ],
  ]
  const d = `M${points[0][0]},${points[0][1]}` + points
    .slice(1)
    .map((pair) => `L${pair[0]},${pair[1]}`)
    .join(' ')
  const fill = 'none'
  const stroke = 'black'
  const path = svg('path', [ 'level' ], { d, fill, stroke, 'stroke-width': 1 })
  root.appendChild(path)
}

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
  setTimeout(() => path.style.strokeDashoffset = '0', 500)
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
