import svg from './svg'

export default function drawLevel (root, points) {
  const d = `M${points[0][0]},${points[0][1]}` + points
    .slice(1)
    .map((pair) => `L${pair[0]},${pair[1]}`)
    .join(' ')
  const fill = 'none'
  const stroke = 'black'
  const path = svg('path', [ 'level' ], { d, fill, stroke, 'stroke-width': 1 })
  root.appendChild(path)
}

