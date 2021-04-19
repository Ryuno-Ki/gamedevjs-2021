import drawLevel from './view/draw-level'
import drawLight from './view/draw-light'
import level from './levels/level0.json'

'use strict';
const root = document.getElementById('root')
const light = document.getElementById('light')
drawLevel(root, level)
drawLight(root, level, [ 50, 91 ], [ 0, -1 ])
updateFavicon(root)

// TODO: Add a game over screen
// TODO: Add a share on Twitter screen
// TODO: Increase attempt on every shoot

function updateFavicon (svg) {
  const icon = document.querySelector('link[rel="icon"]')
  const serializer = new XMLSerializer()
  const str = serializer.serializeToString(svg)
  icon.href = 'data:image/svg+xml;utf8,' + str
}
