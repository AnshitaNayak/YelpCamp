const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const CatchAsync = require('../utils/CatchAsync');
const users = require('../controller/users');

router.route('/register')
    .get(users.createregister)
    .post(CatchAsync(users.renderregister));

router.route('/login')
    .get(users.createlogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login', keepSessionInfo: true }), users.renderlogin);

router.route('/logout')
    .get(users.logout);

module.exports = router;