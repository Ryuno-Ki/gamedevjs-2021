import crosspoint from '../maths/crosspoint'
import evaluate from '../maths/evaluate'
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
  const svgPoints = [ start ]
  let from = svgCoordToCartesianCoord(start)
  let to = svgCoordToCartesianCoord(
    start.map((point, index) => point + direction[ index ])
  )

  const points = parseLevelPoints(levelPoints)
  let point = computePoint(from, to, points)
  let counter = 10
  while (counter--) {
    svgPoints.push(cartesianCoordToSvgCoord(point.crosspoint))
    const nextPoint = computeNextPoint(from, point)
    from = nextPoint.from
    to = nextPoint.to
    point = computePoint(from, to, points)
  }
  return svgPoints
}

function computePoint (from, to, levelPoints) {
  const light = line(from, to)

  const distances = levelPoints
    .map((pt, index) => {
      const crpt = crosspoint(
        { intercept: pt.intercept, slope: pt.slope, x: pt.x },
        light
      )

      return {
        ...pt,
        crosspoint: crpt,
        distance: distance(crpt, from),
        index,
      }
    })
    .map((pt) => {
      const { crosspoint, start, end } = pt
      let within = { x: null, y: null }

      if (crosspoint !== null) {
        within = {
          x: isWithinBounds(crosspoint[ 0 ], start[ 0 ], end[ 0 ]),
          y: isWithinBounds(crosspoint[ 1 ], start[ 1 ], end[ 1 ]),
        }
      }

      return {
        ...pt,
        within,
      }
    })

  const candidates = distances.filter((pt) => pt.within.x && pt.within.y)

  if (candidates.length === 0) {
    return gameover()
  }

  return candidates
    .filter((pt) => pt.distance > 0)
    .reduce((previous, current) => {
      return previous.distance < current.distance
        ? previous
        : current
      }
    )
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

function parseLevelPoints (levelPoints) {
  const points = []
  for (let i = 0; i < levelPoints.length - 1; i++) {
    const current = svgCoordToCartesianCoord(levelPoints[ i ])
    const next = svgCoordToCartesianCoord(levelPoints[ i + 1 ])
    const level = line(current, next)

    points.push({
      start: current,
      end: next,
      length: distance(current, next),
      ...level
    })
  }
  return points
}

function computeNextPoint (oldPoint, point) {
  const before = line(oldPoint, point.crosspoint)
  const after = reflect(
    before,
    { intercept: point.intercept, slope: point.slope, x: point.x }
  )

  const func = evaluate({ ...after })
  const x = point.crosspoint[ 0 ]
  const y = func(x + 1)

  return {
    from: point.crosspoint,
    to: [ x + 1, y ],
  }
}

function distance (point0, point1) {
  if (!point0 || !point1) {
    return null
  }

  const [ x0, y0 ] = point0
  const [ x1, y1 ] = point1
  return Math.round(
    Math.sqrt(
      Math.pow(Math.abs(x1 - x0), 2) + Math.pow(Math.abs(y1 - y0), 2)
    )
  )
}

function isWithinBounds (value, lower, upper) {
  // Since floating point arithmetic is fuzzy, round before comparison
  const tolerance = 0

  /* value >= lower <=> value - lower >= 0 */
  const largerThanLower = lower < upper
    ? Math.round(value) - lower >= tolerance
    : Math.round(value) - upper >= tolerance
  /* value <= upper <=> upper - value >= 0 */
  const smallerThanUpper = upper > lower
    ? upper - Math.round(value) >= tolerance
    : lower - Math.round(value) >= tolerance

  return largerThanLower && smallerThanUpper
}

function gameover () {
  alert('You lost')
}
