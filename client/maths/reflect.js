import crosspoint from './crosspoint.js'
import evaluate from './evaluate.js'
import line from './line.js'

export default function reflect (line0, line1) {
  const point = crosspoint(line0, line1)

  if (point === null) {
    return null
  }

  /*
   * Geometric motivation
   * On a line parallel to the x axis, the reflected line simply switches its
   * signum and is inverted
   */
  if (line1.slope === 0) {
    const func = evaluate({ ...line0 })
    const [ x, y ] = point
    const slope = -1 / line0.slope
    const intercept = y - slope * x
    const y1 = slope * (x + 1) + intercept

    return line([ ...point ], [ x + 1, y1 ])
  }

  /* Geometric motivation:
   * If I go one unit in the x direction and look at the difference in y
   * I have to go the same distance in negative direction along the x axis to
   * get the delta in y for one unit.
   * These will give me the second point to form a line with the cross point.
   */
  const func = evaluate({ ...line1 })
  const x = point[ 0 ]
  const y = func(x)
  const y1 = func(x + 1)

  return line([ x, y ], [ x - y1, y + 1 ])
}

