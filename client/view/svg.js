export default function svg (tag, classes = [], attrs = {}) {
  const ns = 'http://www.w3.org/2000/svg'
  const element = document.createElementNS(ns, tag)

  classes.forEach((cls) => {
    element.classList.add(cls)
  })

  for (let [key, value] of Object.entries(attrs)) {
    element.setAttribute(key, value)
  }

  return element
}

