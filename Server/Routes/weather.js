const express = require('express');
const router = express.Router();

const weatherController = require('../Controllers/WeatherController');

router.route('/').get(weatherController.get_all);
router.route('/weather/:id').get(weatherController.get_by_id)
router.route('/elevation').get(weatherController.get_elevation);
router.route('/test').get(weatherController.test_weather)
router.route('/time/:id').get(weatherController.get_time_by_id);
router.route('/metadata').get(weatherController.get_meta_data);
router.route('/count').get(weatherController.get_count);

module.exports = router;