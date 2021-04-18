import test from 'ava'
import evaluate from './evaluate.js'

test('evaluate', (t) => {
  const slope = 2
  const intercept = 1
  const func = evaluate({ intercept, slope })
  t.true(func instanceof Function)
  t.is(func(3), 7)
})

