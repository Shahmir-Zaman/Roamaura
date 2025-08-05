const express = require('express');

module.exports.renderHome = (req, res) => {
  res.render('landing/home.ejs');
};
