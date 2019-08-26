const express = require('express');
const router = express.Router();
const schemas = require('../ValidationSchemas/Schemas');
const requestValidatorr = require('../Middleware/RequestValidatorMiddleware')

const authController = require('../Controllers/AuthController');

router.route("/register").post(authController.register_user);
router.route("/login").post(requestValidatorr(schemas.loginschema, 'body'), authController.login);
router.route("/user").get(authController.get_user_name);

module.exports = router;