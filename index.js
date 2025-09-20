import LoginRoute from './routes/accessManager.js'
import jwt from 'jsonwebtoken'
import express from 'express'
import cors from 'cors'

const port = 3000
const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
}))

app.use(LoginRoute)

app.listen(port, () => console.log(`API listening at http://localhost:${port}`))
