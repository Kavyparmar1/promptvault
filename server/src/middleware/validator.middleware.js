const  { body, validationResult } =  require('express-validator');

async function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
 const registerUserValidationRules = [
    body('name').notEmpty().withMessage('name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
   
    validate
]
const loginUserValidationRules = [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    validate
]
const  promptValidationRules = [
    body("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),

  body("prompt")
    .isString()
    .withMessage("Prompt content must be a string")
    .notEmpty()
    .withMessage("Prompt content is required"),
    validate
]

module.exports ={ registerUserValidationRules , loginUserValidationRules ,  promptValidationRules}