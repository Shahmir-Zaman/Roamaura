const Listing = require("../models/listing");

//Showing All Listings
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};


//Showing a single listing
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Lisitng you requested does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

// Create a new listing
module.exports.createLisitng = async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "New listing Created!");
  res.redirect("/listings");
};

// Updating a listing
module.exports.updateListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Invalid Listing Data");
  }
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Listing Updated!");
  console.log("meow");
  res.redirect(`/listings/${id}`);
};

//Editing a listing
module.exports.editLisitng = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Lisitng you requested does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};

// Render the form for creating a new listing
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// Deleting a listing
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  console.log(deletedListing);
  res.redirect("/listings");
};
