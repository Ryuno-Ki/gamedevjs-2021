export default function computeIntercept (point0, point1) {
  const [x0, y0] = point0
  const [x1, y1] = point1

  if (x0 === x1) {
    if (y1 < y0) {
      return Number.NEGATIVE_INFINITY
    }
    return Number.POSITIVE_INFINITY
  }

  return (y0 * x1 - y1 * x0) / (x1 - x0)
}

