const express = require('express')
const router = express.Router()
const promptController = require('../controller/prompt.controller')
const validate = require('../middleware/validator.middleware')
const protectAuth = require('../middleware/auth.middleware')
//api's
router.post('/', protectAuth ,validate.promptValidationRules ,promptController.createPrompt)
module.exports = router