const express = require('express');
const userRouter = express.Router();
const auth = require('../Middleware/Authentication/AuthMiddleware')
const requestValidator = require('../Middleware/RequestValidatorMiddleware');
const schema = require('../ValidationSchemas/Schemas')

const userController = require('../Controllers/UserController');

userRouter.use( (req, res, next) => {
    console.log('Time: ' + Date.now())
    next();
})

userRouter.route("/").post(userController.add_user);
userRouter.route("/all").get(auth, userController.get_all_nodes);
userRouter.route("/users").get(userController.get_users);
userRouter.route("/companies").get(userController.get_companies);
userRouter.route("/:name").get(requestValidator(schema.levelschema, 'query'), userController.get_user_by_name);
userRouter.route("/companies/:name").get(userController.get_company_by_name);
userRouter.route("/:name/possible").get(userController.get_possible_friends);


module.exports = userRouter;