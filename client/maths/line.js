import computeIntercept from './intercept.js'
import computeSlope from './slope.js'

export default function computeLineVariables (point0, point1) {
  const slope = computeSlope(point0, point1)
  const intercept = computeIntercept(point0, point1)
  return {
    intercept,
    slope,
  }
}

