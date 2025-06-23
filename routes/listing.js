const express= require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {lsitingSchema,reviewSchema} =require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing =require("../models/listing.js");


//New Route
router.get("/new",(req,res) =>{
    res.render("listings/new.ejs");
});

//Create Route
router.post("/",validateListing,
    wrapAsync(async (req,res,next) =>{

        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("");
}));

//Edit Route
router.get("/:id/edit", wrapAsync(async(req,res)=>{
    let {id} =req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));



//Index Route
router.get("/",wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//Show Route
router.get("/:id", wrapAsync (async (req,res) =>{
    let {id} =req.params;
    const listing= await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));

//Update Route
router.put("/:id", wrapAsync(async(req,res)=>{
        if(!req.body.lsiting){
            throw new ExpressError(400, "Invalid Listing Data");
        }
    let {id} =req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    console.log("meow")
    res.redirect(`/listings/${id}`);

}));

//Delete Route
router.delete("/:id", wrapAsync(async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings")
}));

module.exports = router;