import crosspoint from '../maths/crosspoint'
import line from '../maths/line'
import reflect from '../maths/reflect'
import svg from './svg'

export default function drawLight (root, levelPoints, start, direction) {
  const points = computePoints(start, direction, levelPoints)
  const d = `M${points[0][0]},${points[0][1]}` + points
    .slice(1)
    .map((pair) => `L${pair[0]},${pair[1]}`)
    .join(' ')
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

function computePoints (start, direction, levelPoints) {
  let svgPoints = [ start ]
  let from = svgCoordToCartesianCoord(start)
  let to = svgCoordToCartesianCoord(
    start.map((point, index) => point + direction[ index ])
  )

  const points = []
  for (let i = 0; i < levelPoints.length - 1; i++) {
    const current = svgCoordToCartesianCoord(levelPoints[ i ])
    const next = svgCoordToCartesianCoord(levelPoints[ i + 1 ])
    const level = line(current, next)
    points.push({
      start: [ ...levelPoints[ i ] ],
      end: [ ...levelPoints[ i + 1 ] ],
      length: distance(levelPoints[ i ], levelPoints[ i + 1 ]),
      ...level
    })
  }

  const light = line(from, to)
  const candidates = points
    .map((pt, index) => {
      const crpt = crosspoint(
        { intercept: pt.intercept, slope: pt.slope },
        light
      )

      return {
        ...pt,
        crosspoint: crpt,
        distance: distance(crpt, from),
        index,
        within: {
          x: from[ 0 ] >= pt.start[ 0 ] && from[ 0 ] <= pt.end[ 0 ],
          y: from[ 1 ] >= pt.start[ 1 ] && from[ 1 ] <= pt.end[ 1 ],
        },
      }
    })
    .filter((pt) => pt.within.x || pt.within.y)

  if (candidates.length === 0) {
    return gameover()
  }

  svgPoints.push(
    cartesianCoordToSvgCoord(
      candidates
        .reduce((previous, current) => {
          return previous.distance < current.distance
            ? previous
            : current
          }
        )
        .crosspoint
    )
  )
  return svgPoints
}

function svgCoordToCartesianCoord (point) {
  // Assume a viewBox of "0 0 100 100" here
  const [ x, y ] = point
  return [ x, 100 - y ]
}

function cartesianCoordToSvgCoord (point) {
  // Assume a viewBox of "0 0 100 100" here
  const [ x, y ] = point
  return [ x, 100 - y ]
}

function distance (point0, point1) {
  if (!point0 || !point1) {
    return null
  }

  const [ x0, y0 ] = point0
  const [ x1, y1 ] = point1
  return Math.sqrt(
    Math.pow(Math.abs(x1 - x0), 2) + Math.pow(Math.abs(y1 - y0), 2)
  )
}

function gameover () {
  alert('You lost')
}
