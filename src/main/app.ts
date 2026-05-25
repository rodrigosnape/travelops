import Fastify from 'fastify'
import { registerHealthRoutes } from './routes/health'

export function buildApp() {
  const app = Fastify({ logger: true })
  app.register(registerHealthRoutes)
  return app
}