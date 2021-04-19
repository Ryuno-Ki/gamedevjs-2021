import evaluate from './evaluate.js'

export default function crosspoint (line0, line1) {
  const slope0 = line0.slope
  const slope1 = line1.slope

  if (slope0 === slope1) {
    return crosspointWhenParallels()
  }

  if (Number.isFinite(slope0) && Number.isFinite(slope1)) {
    return crosspointWhenBothAreFinite(line0, line1)
  }

  if (!Number.isFinite(slope0) && slope1 === 0) {
    return crosspointWhenOneIsInfiniteTheAtherZero(line0, line1)
  }

  if (!Number.isFinite(slope1) && slope0 === 0) {
    return crosspointWhenOneIsInfiniteTheAtherZero(line0, line1)
  }

  return crosspointWhenOneIsInfinite(line0, line1)
}

function crosspointWhenParallels () {
  // Lines are parallel, i.e. will never intersect
  return null
}

function crosspointWhenBothAreFinite (line0, line1) {
  const slope0 = line0.slope
  const intercept0 = line0.intercept

  const slope1 = line1.slope
  const intercept1 = line1.intercept

  const factor = 1 / (slope0 - slope1)

  return [
    factor * (intercept1 - intercept0),
    factor * (slope0 * intercept1 - intercept0 * slope1),
  ]
}

function crosspointWhenOneIsInfinite (line0, line1) {
  const slope0 = line0.slope
  const intercept0 = line0.intercept

  const slope1 = line1.slope
  const intercept1 = line1.intercept

  if (!Number.isFinite(slope0)) {
    const func = evaluate({ slope: slope1, intercept: intercept1 })
    const y = func(line0.x)
    const x = (y - intercept1) / slope1
    return [ x, y ]
  }

  const func = evaluate({ slope: slope0, intercept: intercept0 })
  const y = func(line1.x)
  const x = (y - intercept0) / slope0
  return [ x, y ]
}

function crosspointWhenOneIsInfiniteTheAtherZero (line0, line1) {
  const slope0 = line0.slope
  const intercept0 = line0.intercept

  const slope1 = line1.slope
  const intercept1 = line1.intercept

  if (!Number.isFinite(slope1)) {
    if (slope0 === 0) {
      return [ line1.x, intercept0 ]
    }
  }

  if (!Number.isFinite(slope0)) {
    if (slope1 === 0) {
      return [ line0.x, intercept1 ]
    }
  }
  return null
}
