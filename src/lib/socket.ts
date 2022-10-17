// src/lib/realtime.js
import { base } from '$app/paths'
import ioClient from 'socket.io-client'
const ENDPOINT = `http://127.0.0.1:5173`
// const ENDPOINT = `http://127.0.0.1:5173${base}`

console.log({ ENDPOINT })

const socket = ioClient(ENDPOINT)

export const io = socket
