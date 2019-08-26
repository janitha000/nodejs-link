const router = require('express').Router();
const airBnBController = require('../Controllers/airBnbController');
const auth = require('../Middleware/Authentication/AuthMiddleware')


router.route('/').get(auth, airBnBController.get_location);
router.route('/review').get(auth, airBnBController.get_by_review_score);

module.exports = router;