const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js"); // Import the User model

const listingRouter = require("./routes/listing.js"); // Import the listings route
const reviewRouter = require("./routes/review.js"); // Import the reviews route
const userRouter = require("./routes/user.js"); // Import the user route
const landingRouter = require("./routes/landing.js"); // Import the landing route

//Connecting to MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017/roamora";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate); // to use ejs-mate as the template engine
app.use(express.static(path.join(__dirname, "public"))); // to use public folder as static files

const sessionOptions = {
  secret: "MySuperSecretKey",
  resave: false,
  saveUninitialized: true,
  cookie: {
    exepires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.use("/", landingRouter); // Use the landing route
app.use("/listings", listingRouter); // Use the listings route
app.use("/listings/:id/reviews", reviewRouter); // Use the reviews route
app.use("/", userRouter); // Use the user route

//404 Route
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("listings/error.ejs", { err });
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
