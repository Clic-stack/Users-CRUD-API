import express from 'express'
import routes from './routes/index.js'

const app = express()

app.set('port', 3000)

app.use(express.json())

app.use('/', routes)

export default app