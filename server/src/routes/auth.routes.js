const express = require('express')
const routes = express.Router()
const authController = require('../controller/auth.controller')
const validator = require('../middleware/validator.middleware')


//auth api's 
routes.post('/register', validator.registerUserValidationRules ,authController.registerController)
routes.post('/login',authController.loginController)
routes.post('/logout',authController.logoutController)

module.exports = routes