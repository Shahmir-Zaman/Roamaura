const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const express= require("express");
const router = express.Router();

const passprtLocalMongoose = require("passport-local-mongoose");

const userSchema =new Schema({
    email:{
        type: String,
        required: true,
    },
});

userSchema.plugin(passprtLocalMongoose);

router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = new User({ email });
        await User.register(user, password);
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(400).send("Error registering user: " + error.message);
    }
});

module.exports =mongoose.model("User", userSchema);


