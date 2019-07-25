const express = require('express');
const userRouter = express.Router();

const userController = require('../Controllers/UserController');

userRouter.route("/").get(userController.get_users).post(userController.add_user);

module.exports = userRouter;