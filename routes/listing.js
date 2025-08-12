const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const { isLoggedIn, isOwner, validateListing } = require('../middleware.js');
const multer = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });

const listingsController = require('../controllers/listings.js');

router
  .route('/')
  //All Listing Route
  .get(wrapAsync(listingsController.index))
  //Create Route
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingsController.createLisitng)
  );

//New Route
router.get('/new', isLoggedIn, listingsController.renderNewForm);

router
  .route('/:id')
  //Show Route
  .get(wrapAsync(listingsController.showListing))
  //Update Route
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingsController.updateListing)
  )
  //Delete Route
  .delete(isLoggedIn, isOwner, wrapAsync(listingsController.deleteListing));

//Edit Route
router.get(
  '/:id/edit',
  isLoggedIn,
  isOwner,
  wrapAsync(listingsController.editLisitng)
);

module.exports = router;
