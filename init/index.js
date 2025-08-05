const mongoose=require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");;

const MONGO_URL="mongodb://127.0.0.1:27017/roamora"

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

const initDB = async () => {
    await listing.deleteMany({});
    const listingsWithOwner = initData.data.map((obj) => ({
        ...obj,
        owner: "6891ef458bdca53311c92cb5",
    }));
    await listing.insertMany(listingsWithOwner);
    console.log("Data was initialized");
};

initDB();
 