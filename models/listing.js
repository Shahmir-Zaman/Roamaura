const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const Review = require("./review.js");

const listingSchema= new Schema({
    title:{
    type: String,
    required:true,
    },
    description: String,
    image: {
        type:String,
        default:"https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :v,
    },
    price: Number,
    location: String,
    country:String,
    reviews: [{
        type:Schema.Types.ObjectId,
        ref:"Review",
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
});

listingSchema.post("findOneAndDelete", async function (listing) {
   if(listing) {
    await Review.deleteMany({reviews :{$in : listing.reviews}});
}
}); 

const Listing=mongoose.model("Listing",listingSchema);
module.exports = Listing;