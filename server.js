const { get } = require('http')

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
// http://localhost:3000/
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const storyBodyJsonSchema = {
    type: 'object',
    required: ['title', 'content'],
    properties: {
        title: { type: 'string' },
        content: {type: 'string'},
        image:{type: 'string'}
    },
}
const schema = {
    body: storyBodyJsonSchema,
}

// http://localhost:3000/story
fastify.post('/story', { schema }, async (request, reply) => {
    return request.body
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()