import fastify from 'fastify'
import cors from '@fastify/cors'
import { swaggerConfig } from './swagger'
import each from 'lodash/fp/each'

const httpServer = (opts: any) => {
    
    const server = fastify()
    server.register(cors)
    swaggerConfig(server);

    opts.cradle.routesDiscovery.loadRoute().forEach ((route: any) => {
        each((path: any) => {
          path.path = `${process.env.CONTEXT_PATH}/api${path.path}`
          server.route(path)
        })(opts.cradle[`${route}`])
      })    
    
      return server
  }
  
  export default httpServer