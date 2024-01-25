const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

// Define routes
router.get('/login', auth.getLoginPage);
router.post('/login', auth.login);
router.get('/signup', auth.getSignupPage);
router.post('/signup', auth.signup);
router.get('/logout', auth.logout);

module.exports = router;