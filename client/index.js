import drawEnd from './view/draw-end'
import drawLevel from './view/draw-level'
import drawLight from './view/draw-light'
import drawStart from './view/draw-start'
import levels from './levels.json'

'use strict';

let currentLevelIndex = 0

listLevels(levels.map((level) => level.name))
registerEventListeners()
loadLevel(levels[ currentLevelIndex ].name)

// TODO: Add a game over screen
// TODO: Add a share on Twitter screen

function listLevels (names) {
  const list = document.getElementById('levels')
  names.forEach((name) => {
    const item = document.createElement('li')
    item.textContent = name
    list.appendChild(item)
  })
}

function registerEventListeners () {
  const angle = document.getElementById('angle')
  const form = document.getElementById('form')
  const list = document.getElementById('levels')

  angle.addEventListener('change', (event) => onChange(event))
  form.addEventListener('submit', (event) => onSubmit(event))
  list.addEventListener('click', (event) => onClick(event))
}

function onChange (event) {
  const element = document.querySelector('.start')
  if (element === null) {
    return
  }

  const input = event.target
  const value = parseInt(input.value, 10)
  const { start } = levels[ currentLevelIndex ]
  const [ begin, end ] = start

  element.setAttribute('transform', `rotate(${value}, ${begin}, ${end})`)
  clearLight()
  updateFavicon()
}

function onClick (event) {
  const { currentTarget, target } = event
  if (target.nodeName.toLowerCase() !== 'li') {
    return
  }

  currentLevelIndex = Array
    .from(
      currentTarget.children
    )
    .findIndex((child) => child === target)
  loadLevel(target.textContent)
}

function onSubmit (event) {
  event.preventDefault()

  const root = document.getElementById('root')

  clearLight()

  const { shape, start } = levels[ currentLevelIndex ]
  drawLight(root, shape, start, getAngle())

  increaseAttempt()
  shareOnTwitter()
  updateFavicon()
}

function loadLevel (levelName) {
  const root = document.getElementById('root')
  const level = levels.find((level) => level.name === levelName)

  reset()
  drawLevel(root, level.shape)
  drawStart(root, level.start)
  drawEnd(root, level.end)
  updateFavicon()
}

function resetAngle () {
  const angle = document.getElementById('angle')
  angle.value = 0
}

function resetAttempts () {
  const attempt = document.getElementById('attempt')
  attempt.value = 0
}

function reset () {
  resetAngle()
  resetAttempts()

  clearLevel()
  clearStart()
  clearEnd()
  clearLight()
}

function clearLevel () {
  const level = document.querySelector('.level')
  if (level) {
    level.remove()
  }
}

function clearStart () {
  const start = document.querySelector('.start')
  if (start) {
    start.remove()
  }
}

function clearEnd () {
  const end = document.querySelector('.end')
  if (end) {
    end.remove()
  }
}

function clearLight () {
  const light = document.querySelector('.light')
  if (light) {
    light.remove()
  }
}

function getAngle () {
  const angle = document.getElementById('angle')

  const radians = degToRad(parseInt(angle.value, 10) - 90)
  return polarToCartesian({ r: 1, degree: radians })
}

function increaseAttempt () {
  const attempt = document.getElementById('attempt')
  attempt.value = parseInt(attempt.value, 10) + 1
}

function degToRad (deg) {
  /* deg / 180 = x / PI */
  return deg * Math.PI / 180
}

function polarToCartesian (polar) {
  const { r, degree } = polar
  const x = parseFloat((Math.cos(degree) / r).toFixed(2))
  const y = parseFloat((Math.sin(degree) / r).toFixed(2))
  return [ x, y ]
}

function updateFavicon () {
  const svg = document.getElementById('root')
  const icon = document.querySelector('link[rel="icon"]')

  const serializer = new XMLSerializer()
  const str = serializer
    .serializeToString(svg)
    .replace(/ id="\w+"/g, '')
    .replace(/ style=".*"/g, '')
    .replace(/ class="\w+"/g, '')
  icon.href = 'data:image/svg+xml;utf8,' + str
}

function shareOnTwitter () {
  const element = document.getElementById('attempt')
  const light = document.querySelector('.light')
  const shareMe = document.getElementById('share-me')

  const attempts = parseInt(element.value, 10)
  const plural = attempts !== 1 ? '' : 's'
  const currentLevel = levels[ currentLevelIndex ].name
  const score = Math.round(light.getTotalLength())

  const encodedText = encodeURIComponent(
    [
      'I played "I Really Move On".',
      `I tried ${currentLevel} ${attempts} time${plural}!`,
      `My score was ${score}.`,
      'Can you beat me?',
      '',
      'https://ryuno-ki.itch.io/i-really-move-on'
      ''  // To push hashtag and via to new line
    ].join('\n')
  )

  const { hostname, pathname, protocol } = location
  const encodedUrl = encodeURIComponent(`${protocol}//${hostname}${pathname}`)

  const href = `https://twitter.com/intent/tweet?url=${encodedUrl}&hashtags=gamedevjs&via=AndreJaenisch&text=${encodedText}`
  shareMe.href = href
}
