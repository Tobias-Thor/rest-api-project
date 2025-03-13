const express = require('express');
const router = express.Router();
const generalController = require('../controllers/generalController');

// Root GET-route
router.get('/', generalController.getHome);

// About route
router.get('/about', generalController.getAbout);

// POST /data
router.post('/data', generalController.postData);

module.exports = router;
