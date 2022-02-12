import Fastify from 'fastify'
import fastifyHttpProxy from 'fastify-http-proxy'
import next from 'next'

const server = Fastify({ logger: true })

const port = parseInt(process.env.PORT || '3000', 10)
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
})
const handle = app.getRequestHandler()

server.register(fastifyHttpProxy, {
  upstream: 'http://localhost:1337',
  prefix: '/graphql',
  rewritePrefix: '/graphql',
})

app.prepare().then(() => {
  if (dev) {
    server.get('/_next/*', (req, reply) => {
      return handle(req.raw, reply.raw).then(() => {
        reply.sent = true
      })
    })
  }
  server.all('/*', (req, reply) => {
    return handle(req.raw, reply.raw).then(() => {
      reply.sent = true
    })
  })
  server.setNotFoundHandler((request, reply) => {
    return app.render404(request.raw, reply.raw).then(() => {
      reply.sent = true
    })
  })
  server.listen(port, (err) => {
    if (err) throw err
    server.log.info(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  })
})
