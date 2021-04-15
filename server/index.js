const fastify = require('fastify')({ logger: true })

const PORT = process.env.PORT || 3000

fastify.get('/', async (request, reply) => {
  const fs = require('fs')
  const path = require('path')
  const filePath = path.resolve(
    path.join(__dirname, '..', 'client', 'index.html')
  )
  const stream = fs.createReadStream(filePath, 'utf-8')
  reply.type('text/html').send(stream)
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
