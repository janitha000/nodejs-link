const express = require('express');
const router = express.Router();

const authController = require('../Controllers/AuthController');

router.route("/register").post(authController.register_user);
router.route("/login").post(authController.login);

module.exports = router;