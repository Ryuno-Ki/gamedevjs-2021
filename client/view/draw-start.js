import svg from './svg'

export default function drawStart (root, start) {
  const d = `M${start[0]},${start[1]} l3,5 h-6Z`
  const fill = 'orange'
  const stroke = 'orange'
  const path = svg('path', [ 'start' ], { d, fill, stroke, 'stroke-width': 1 })
  root.appendChild(path)
}

