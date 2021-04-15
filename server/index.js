const fastify = require('fastify')({ logger: true })
const path = require('path')

const distPath = path.join(__dirname, '..', 'dist')
console.log('Dist', distPath)
const PORT = process.env.PORT || 3000

fastify.register(require('fastify-static'), {
  root: distPath
})

fastify.get('/', async (req, res) => {
  const { readdir } = require('fs/promises')
  const files = await readdir(distPath)
  const fileName = files.find((file) => file.endsWith('.html'))
  res.sendFile(fileName)
})

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
