require('dotenv').config();
const mongoose = require('mongoose');
const initData = require('./data.js');
const listing = require('../models/listing.js');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');


const MONGO_URL = process.env.MongoURl;
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

console.log('MAP_TOKEN loaded:', mapToken ? 'YES' : 'NO');

main()
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    console.log(err);
  });

async function main() {
  mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await listing.deleteMany({});

  const listingsWithOwner = [];
  for (let obj of initData.data) {
    try {
      console.log(`Geocoding: ${obj.location}`);

      let res = await geocodingClient
        .forwardGeocode({
          query: obj.location,
          limit: 1,
        })
        .send();

      const listingsWithOwnerAndGeometry = {
        ...obj,
        owner: '6891ef458bdca53311c92cb5',
        geometry: res.body.features[0].geometry,
      };

      listingsWithOwner.push(listingsWithOwnerAndGeometry);
      console.log(`✓ Geocoded: ${obj.location}`);
    } catch (error) {
      console.error(`✗ Failed to geocode ${obj.location}:`, error.message);
      // Add without geometry if geocoding fails
      listingsWithOwner.push({
        ...obj,
        owner: '6891ef458bdca53311c92cb5',
      });
    }
  }

  await listing.insertMany(listingsWithOwner);
  console.log('Data was initialized with geocoding');
};

initDB();
