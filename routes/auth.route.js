const express = require('express');
const router = express.Router();
const { celebrate } = require('celebrate');

const authController = require('../controllers/auth.controller');
const authValidation = require('../validations/auth.validate');

router
    .route('/login')
    .post(celebrate({ body: authValidation.loginSchema }), authController.login)

module.exports = router;