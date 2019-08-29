const router = require('express').Router();
const airBnBController = require('../Controllers/airBnbController');
const auth = require('../Middleware/Authentication/AuthMiddleware');
const { review } = require('../ValidationSchemas/Schemas');
const requestValidator = require('../Middleware/RequestValidatorMiddleware')


router.route('/').get(auth, airBnBController.get_location);
router.route('/review').get(auth, requestValidator(review, 'query'), airBnBController.get_by_review_score);

module.exports = router;