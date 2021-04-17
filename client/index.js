import drawLevel from './view/draw-level'
import drawLight from './view/draw-light'
import mirror from './levels/mirror.json'

'use strict';
const root = document.getElementById('root')
const light = document.getElementById('light')
drawLevel(root, mirror)
drawLight(root, mirror, [15, 91], [0, -1])

