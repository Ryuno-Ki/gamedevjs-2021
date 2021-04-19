import test from 'ava'
import crosspoint from './crosspoint.js'

test('crosspoint', (t) => {
  const line0 = { intercept: 2, slope: 2 }
  const line1 = { intercept: 1, slope: 1 }

  t.deepEqual(crosspoint(line0, line1), [ -1, 0 ])
})

test('crosspoint - first line infinite slope', (t) => {
  const line0 = { intercept: 2, slope: Number.POSITIVE_INFINITY, x: 3 }
  const line1 = { intercept: 1, slope: 1 }

  t.deepEqual(crosspoint(line0, line1), [ 3, 4 ])
})

test('crosspoint - second line infinite slope', (t) => {
  const line0 = { intercept: 2, slope: 2 }
  const line1 = { intercept: 1, slope: Number.POSITIVE_INFINITY, x: 3 }

  t.deepEqual(crosspoint(line0, line1), [ 3, 8 ])
})

test('crosspoint - parallel lines', (t) => {
  const line0 = { intercept: 2, slope: 2 }
  const line1 = { intercept: 1, slope: 2 }

  t.is(crosspoint(line0, line1), null)
})

test('crosspoint - infinite slope meets 0 slope', (t) => {
  const line0 = {
    intercept: Number.POSITIVE_INFINITY,
    slope: Number.POSITIVE_INFINITY,
    x: 1,
  }
  const line1 = { intercept: 1, slope: 0 }

  t.deepEqual(crosspoint(line0, line1), [ 1, 1 ])
})

