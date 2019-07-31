const express = require('express');
const router = express.Router();

const locationController = require('../Controllers/LocationsController')

router.route('/').get(locationController.get_locations).post(locationController.add_location);
router.route(':id').get(locationController.get_by_id);
// router.route('/max/').get(locationController.get_max_elevation);
router.route('/metadata').get(locationController.get_meta_data);

module.exports = router;