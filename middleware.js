const Listing = require("./models/listing");
const {listingSchema,reviewSchema} =require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review");

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
    req.flash("error","You must be logged in to create a listing!");
    //redirectURL 
    req.session.redirectURL = req.originalUrl;
    return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl=(req,res,next) =>{
    if(req.session.redirectURL){
        res.locals.redirectURL = req.session.redirectURL;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
        let {id} =req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not authorized to edit this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}


module.exports.validateListing = (req, res, next) => {
        let {error} = listingSchema.validate(req.body); // Validate the request body against the schema
        if(error){
            let errMsg= error.details.map((el) => el.message).join(", ");
            throw new ExpressError(400, errMsg);
        } else{
            next();
        }
};


module.exports.validateReview=(req,res,next) =>{
        let {error} = reviewSchema.validate(req.body); // Validate the request body against the schema
        if(error){
            let errMsg= error.details.map((el) => el.message).join(", ");
            throw new ExpressError(400, errMsg);
        } else{
            next();
        }
};

module.exports.isReviewAuthor = async (req, res, next) => {
        let {id,reviewId} =req.params;
    let review= await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not authorized to delete this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
