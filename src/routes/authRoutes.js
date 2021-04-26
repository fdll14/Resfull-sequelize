const authRoutes = require('express').Router();
const authControllers = require('../controllers/authControllers');
const authController = require('../controllers/authControllers');

authRoutes.post('/signup', authController.signup)
authRoutes.post('/signin', authControllers.signin)
module.exports = authRoutes;