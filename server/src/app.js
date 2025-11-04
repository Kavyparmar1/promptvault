const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const authRoutes = require('../src/routes/auth.routes')
const promptRoutes = require('../src/routes/prompt.routes')
const cors = require('cors')
//middleware
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

//api
app.use('/api/auth',authRoutes)
app.use('/api/prompt',promptRoutes)
module.exports = app