const express = require("express");
const doctorRouter = express.Router();
const cloudinary = require("cloudinary").v2;
const {
  doctorSignUp,
  doctorSignIn,
  uploadDegree,
  activateAccount,
  allDoctors,
  searchdoctors,
  SpecificDoctor,
} = require("../controller/doctorController");
const verifyToken = require("../middleware/verifyToken");
require("dotenv").config();

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// const cloudinaryConfig = {
//   cloudName: process.env.CLOUDINARY_CLOUD_NAME,
//   apiKey: process.env.CLOUDINARY_API_KEY,
//   apiSecret: process.env.CLOUDINARY_API_SECRET,
// };
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

const upload = multer({ storage });

doctorRouter.post("/api/doctorSignUp", doctorSignUp);
doctorRouter.post("/api/doctorSignIn", doctorSignIn);
doctorRouter.post(
  "/api/uploadDegree",
  [verifyToken, upload.single("file")],
  uploadDegree
);
doctorRouter.post("/api/activateAccount", verifyToken, activateAccount);
doctorRouter.get("/api/alldoctors", verifyToken, allDoctors);
doctorRouter.get("/api/SpecificDoctor", verifyToken, SpecificDoctor);
doctorRouter.post("/api/searchdoctors", verifyToken, searchdoctors);

module.exports = doctorRouter;
