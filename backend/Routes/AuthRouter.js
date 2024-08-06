const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const express = require('express');

const router = express.Router();

// Define the routes with validation middleware and corresponding controllers
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;