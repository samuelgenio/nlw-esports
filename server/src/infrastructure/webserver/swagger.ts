import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { FastifyReply, FastifyRequest } from 'fastify'

export function swaggerConfig (server: any) {
  
	server.register(fastifySwagger, {
		mode: 'static',
		specification: {
		path: './swagger_output.json',
		postProcessor: function(swaggerObject: Document) {
			return swaggerObject
		},
		baseDir: './'
		}
	})
	
	server.register(fastifySwaggerUi, {
		routePrefix: `${process.env.CONTEXT_PATH}/swagger`,
		uiConfig: {
		docExpansion: 'list',
		deepLinking: true,
		displayRequestDuration: true,
		},
		staticCSP: true,
	})

	server.get(`${process.env.CONTEXT_PATH}`, (_: FastifyRequest, res: FastifyReply) => {
		res.redirect(`${process.env.CONTEXT_PATH}/swagger`);
	});
}