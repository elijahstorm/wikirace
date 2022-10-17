import http from 'http'
import { handler } from './build/handler.js'
import { sveltesocket } from './socket-handler'
import express from 'express'

const app = express()
const server = http.createServer(app)

sveltesocket().configureServer(server)

// SvelteKit handlers
app.use(handler)

server.listen(3000, () => {
	console.log('Running on http://localhost:3000')
})
