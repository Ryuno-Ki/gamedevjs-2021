import line from '../maths/line.js'
import normal from '../maths/normal.js'
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

  for (let i = 1; i < levelPoints.length - 1; i++) {
    const current = svgCoordToCartesianCoord(levelPoints[ i ])
    const next = svgCoordToCartesianCoord(levelPoints[ i + 1 ])

    const point = computeCrossingPoint(current, next, from, to)

    // TODO: Get rid of right hand side
    if (point.coords && point.coords.length > 0 && point.coords.every((coord) => !Number.isNaN(coord))) {
      console.log('Crossed', point.coords, point.slope)
      svgPoints.push(cartesianCoordToSvgCoord(point.coords))
      from = point.coords
      to = [ from[ 0 ] + 1, point.slope + from[ 1 ] ]
    }
    // TODO: Jetzt spiegeln, d.h. Einfallswinkel = Ausfallswinkel
    // Anschließend nächsten Schnittpunkt berechnen
  }
  console.log(svgPoints)
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

function computeCrossingPoint (current, next, from, to) {
  console.log(current, next, from, to)
  const level = line(current, next)
  const light = line(from, to)

  console.log('Level', level.slope, level.intercept)
  console.log('Light', light.slope, light.intercept)

  if (level.slope === light.slope) {
    // lines are parallel => no crossing => skip
    return {
      coords: null,
      slope: null,
    }
  }

  if (Number.isFinite(light.slope)) {
    if (level.slope === 0) {
      return {
        coords: null,
        slope: null,
      }
    }
    console.log(current, next, from, to, level, light)
    const factor = 1 / (level.slope - light.slope)
    return {
      coords: [
        (light.intercept - level.intercept) * factor,
	(light.slope * level.intercept - light.intercept * level.slope) * factor,
      ],
      slope: normal((light.intercept - level.intercept) * factor),
    }
  } else {
    y = level.slope * from[ 0 ] + level.intercept
    x = (y - level.intercept) / level.slope
    return { coords: [ x, y ], slope: normal(level.slope) }
  }
}

