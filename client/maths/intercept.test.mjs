import test from 'ava'
import intercept from './intercept.js'

test('intercept', (t) => {
  const point0 = [ 2, 3 ]
  const point1 = [ 3, 3 ]

  t.is(intercept(point0, point1), 3)
})

test('intercept with points parallel to y upwards', (t) => {
  const point0 = [ 3, 3 ]
  const point1 = [ 3, 2 ]

  t.is(intercept(point0, point1), Number.NEGATIVE_INFINITY)
})

test('intercept with points parallel to y downwards', (t) => {
  const point0 = [ 3, 2 ]
  const point1 = [ 3, 3 ]

  t.is(intercept(point0, point1), Number.POSITIVE_INFINITY)
})

