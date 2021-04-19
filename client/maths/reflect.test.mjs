import test from 'ava'
import reflect from './reflect.js'

test('reflect', (t) => {
  const line0 = { intercept: 1, slope: 1 }
  const line1 = { intercept: 2, slope: 2 }

  t.deepEqual(reflect(line0, line1), { intercept: -0.5, slope: -0.5 })
  t.deepEqual(reflect(line1, line0), { intercept: -1, slope: -1 })
})

test('reflect - no intersection', (t) => {
  const line0 = { intercept: 1, slope: 2 }
  const line1 = { intercept: 2, slope: 2 }

  t.is(reflect(line0, line1), null)
})

test('reflect - parallel to x axis', (t) => {
  const line0 = { intercept: 1, slope: 2 }
  const line1 = { intercept: 1, slope: 0 }

  t.deepEqual(reflect(line0, line1), { intercept: 1, slope: -1/2 })
})

test('reflect - parallel to x axis crossing parallel to y axis', (t) => {
  const line0 = {
    intercept: Number.POSITIVE_INFINITY,
    slope: Number.POSITIVE_INFINITY,
    x: 1,
  }
  const line1 = { intercept: 1, slope: 0 }

  t.deepEqual(
    reflect(line0, line1),
    {
      intercept: Number.POSITIVE_INFINITY,
      slope: Number.NEGATIVE_INFINITY,
      x: 1,
    }
  )
})

