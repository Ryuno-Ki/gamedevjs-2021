import test from 'ava'
import normal from './normal.js'

test('normal', (t) => {
  const slope = 2

  t.is(normal(slope), -1/2)
})

test('normal - slope 0', (t) => {
  const slope = 0

  t.is(normal(slope), Number.POSITIVE_INFINITY)
})

test('normal - slope +Infinity', (t) => {
  const slope = Number.POSITIVE_INFINITY

  t.is(normal(slope), -0)
})

test('normal - slope -Infinity', (t) => {
  const slope = Number.NEGATIVE_INFINITY

  t.is(normal(slope), 0)
})

