const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Dynamic GET-route with user ID
router.get('/:id', userController.getUserById);

module.exports = router;
