import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://usercrud-fullstack.netlify.app"
  ]
}));

app.use(express.json())

app.set('port', process.env.PORT || 3000)

app.use('/', routes)

export default app