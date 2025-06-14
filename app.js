const express = require("express");
const app= express();
const mongoose=require("mongoose");
const Listing =require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate"); 

//Connecting to MongoDB
const MONGO_URL="mongodb://127.0.0.1:27017/roamora";

main()
    .then( ()=>{
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main (){
    mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")); 
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate); // to use ejs-mate as the template engine
app.use(express.static(path.join(__dirname,"public"))); // to use public folder as static files


app.get("/",(req,res) =>{
    res.send("Hi, I am root")
})

//New Route
app.get("/listings/new",(req,res) =>{
    res.render("listings/new.ejs");
});

//Create Route
app.post("/listings", async (req,res) =>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings")
    console.log({newListing});
});

//Edit Route
app.get("/listings/:id/edit", async(req,res)=>{
    let {id} =req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});



//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

//Show Route
app.get("/listings/:id", async (req,res) =>{
    let {id} =req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//Update Route
app.put("/listings/:id", async(req,res)=>{
    let {id} =req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    console.log("meow")
    res.redirect(`/listings/${id}`);

});

//Delete Route
app.delete("/listings/:id", async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings")
});


app.listen(8080,() =>{
    console.log("Server is listening to port 8080");
});


