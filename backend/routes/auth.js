const express  =require('express');
const { Register, Login } = require('../controllers/auth');
const router = express.Router();
// Sign Endpoints
router.post('/register', Register);
// Login Endpoints
router.post('/login', Login);
module.exports = router;