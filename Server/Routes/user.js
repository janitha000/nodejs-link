const express = require('express');
const userRouter = express.Router();

const userController = require('../Controllers/UserController');

userRouter.route("/").post(userController.add_user);
userRouter.route("/all").get(userController.get_all_nodes);
userRouter.route("/users").get(userController.get_users);
userRouter.route("/companies").get(userController.get_companies);
userRouter.route("/:name").get(userController.get_user_by_name);
userRouter.route("/companies/:name").get(userController.get_company_by_name);

module.exports = userRouter;