import drawLevel from './view/draw-level'
import drawLight from './view/draw-light'
import level from './levels/level0.json'

'use strict';
const root = document.getElementById('root')
const light = document.getElementById('light')
drawLevel(root, level)
drawLight(root, level, [ 90, 91 ], [ 0, -1 ])

