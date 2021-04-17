export default function normal (slope) {
  if (slope === 0) {
    return Number.POSITIVE_INFINITY
  }
  return -1 / slope
}

