import test from 'ava'
import line from './line.js'

test('line', (t) => {
  const point0 = [ 2, 2 ]
  const point1 = [ 3, 3 ]

  t.deepEqual(line(point0, point1), { intercept: 0, slope: 1 })
})

