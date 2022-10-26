import bootstrap from './infrastructure/bootstrap'
import path from 'path'
import httpServer from './infrastructure/webserver/fastify'

require('dotenv').config()

const container = bootstrap(path.resolve(__dirname))

const app = httpServer(container)

const port: number = (process.env.PORT || 3333) as number
const contextPath = process.env.CONTEXT_PATH || ""
const appEnv = process.env.APP_ENV || ""
const host = "0.0.0.0"

app.listen({port, host}, (err: any, address: any) => {
	if (err) {
		console.log(err)
		process.exit(1)
	}
	console.log(`server listening on :${port}${contextPath}! environment: ${appEnv}`)
})