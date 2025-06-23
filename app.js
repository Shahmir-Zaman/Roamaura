const express = require("express");
const app= express();
const mongoose=require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate"); 
const ExpressError = require("./utils/ExpressError.js");
const session= require("express-session");
const flash= require("connect-flash");


const listing= require("./routes/listing.js"); // Import the listings route
const reviews = require("./routes/review.js"); // Import the reviews route


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

const sessionOptions={
    secret: "MySuperSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie:{
        exepires:Date.now() + 7*24*60*60*1000, 
        maxAge: 7*24*60*60*1000,
        httpOnly:true,
    }
}

app.get("/",(req,res) =>{s
    res.send("Hi, I am root")
});


app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    console.log(res.locals.success);
    next();
});

app.use("/listings",listing); // Use the listings route
app.use("/listings/:id/reviews", reviews); // Use the reviews route


//404 Route
app.all("*",(req,res,next) =>{
    next(new ExpressError(404, "Page Not Found")); // <-- FIXED ORDER
});

app.use((err,req,res,next) =>{
    let {statusCode = 500, message = "Something went wrong!"} = err;
    res.status(statusCode).render('listings/error.ejs',{err})
    //res.status(statusCode).send(message); // <-- also fixed: use res.status()
});

app.listen(8080,() =>{
    console.log("Server is listening to port 8080");
});


