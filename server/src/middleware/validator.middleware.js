const  { body, validationResult } =  require('express-validator');

async function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
 const registerUserValidationRules = [
    body('name').notEmpty().withMessage('First name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
   
    validate
]


module.exports ={ registerUserValidationRules}