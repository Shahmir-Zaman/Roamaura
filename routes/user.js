const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');

const userController = require('../controllers/users.js');
const user = require('../models/user.js');

router
  .route('/signup')
  //redner the signup page
  .get(userController.renderSignup)
  //create a new user
  .post(wrapAsync(userController.signup));

router
  .route('/login')
  //redner the login page
  .get(userController.rednerLogin)
  //login the user
  .post(
    saveRedirectUrl,
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: true,
    }),
    userController.login
  );

router.get('/logout', userController.logout);

module.exports = router;
