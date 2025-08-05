const User = require('../models/user.js');

// Render the signup page
module.exports.renderSignup = (req, res) => {
  res.render('users/signup.ejs');
};

// Handle user signup
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, err => {
      if (err) {
        return next(err);
      }
      req.flash('success', 'Welcome to Roamaura!');
      res.redirect('/login');
    });
  } catch (e) {
    req.flash('error', e.message);
    res.redirect('/signup');
  }
};

// Render the login page
module.exports.rednerLogin = (req, res) => {
  res.render('users/login.ejs');
};

//Handle user login
module.exports.login = async (req, res) => {
  req.flash('success', 'Welcome back to Roamaura!');
  let redirectUrl = res.locals.redirectURL || '/listings';
  res.redirect(redirectUrl);
};

//User Logout
module.exports.logout = (req, res, next) => {
  req.logout(err => {
    if (err) {
      return next(err);
    }
    req.flash('success', 'Goodbye! See you soon!');
    res.redirect('/listings');
  });
};
