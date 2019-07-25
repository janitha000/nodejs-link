const express = require('express');
const router = express.Router();

const locationController = require('../Controllers/LocationsController')

router.route('/').get(locationController.get_locations).post(locationController.add_location);
router.route('/:id').get(locationController.get_by_id);

module.exports = router;