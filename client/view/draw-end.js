import svg from './svg'

export default function drawEnd (root, coords) {
  const [ start, end ] = coords
  const d = `M${start[ 0 ]},${start[ 1 ]} L${end[ 0 ]},${end[ 1 ]}`
  const fill = 'none'
  const stroke = 'black'
  const path = svg('path', [ 'end' ], { d, fill, stroke, 'stroke-width': 1 })
  root.appendChild(path)
}

