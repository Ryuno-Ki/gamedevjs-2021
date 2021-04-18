import test from 'ava'
import slope from './slope.js'

test('slope', (t) => {
  const point0 = [ 2, 2 ]
  const point1 = [ 3, 3 ]

  t.is(slope(point0, point1), 1)
})

test('slope - equal x, y downwards', (t) => {
  const point0 = [ 2, 3 ]
  const point1 = [ 2, 2 ]

  t.is(slope(point0, point1), Number.NEGATIVE_INFINITY)
})

test('slope - equal x, y upwards', (t) => {
  const point0 = [ 2, 2 ]
  const point1 = [ 2, 3 ]

  t.is(slope(point0, point1), Number.POSITIVE_INFINITY)
})

test('slope - equal y', (t) => {
  const point0 = [ 2, 2 ]
  const point1 = [ 3, 2 ]

  t.is(slope(point0, point1), 0)
})

