require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary with URL
cloudinary.config({
  url: process.env.CLOUDINARY_URL,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'RoamAura-Dev',
    allowedFormats: ['png', 'jpg', 'jpeg'],
  },
});

module.exports = {
  cloudinary,
  storage,
};
