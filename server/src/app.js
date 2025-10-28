const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const authRoutes = require('../src/routes/auth.routes')
//middleware
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))

//api
app.use('/api/auth',authRoutes)
module.exports = app