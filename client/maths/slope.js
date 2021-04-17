export default function computeSlope (point0, point1) {
  const [x0, y0] = point0
  const [x1, y1] = point1

  if (x0 === x1) {
    if (y1 < y0) {
      return Number.NEGATIVE_INFINITY
    }
    return Number.POSITIVE_INFINITY
  }

  if (y0 === y1) {
    return 0
  }

  return (y1 - y0) / (x1 - x0)
}

