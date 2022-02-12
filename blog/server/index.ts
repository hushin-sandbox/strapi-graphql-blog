import Fastify from 'fastify'
import fastifyHttpProxy from 'fastify-http-proxy'
import fastifyNext from 'fastify-nextjs'

const server = Fastify({ logger: { level: 'error' } })

const port = parseInt(process.env.PORT || '3000', 10)
const env = process.env.NODE_ENV
const dev = env !== 'production'

const start = async () => {
  try {
    await server
      .register(fastifyNext, {
        dir: '.', // base directory where everything is, could move to src later
        dev,
      })
      .after(() => {
        server.next('*')
      })
    await server.register(fastifyHttpProxy, {
      upstream: 'http://localhost:1337',
      prefix: '/graphql',
      rewritePrefix: '/graphql',
    })
    await server.listen(port)
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
