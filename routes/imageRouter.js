const express = require("express");
const router = express.Router();
const {createImage,getImage}=require("../controllers/imageController")

router.post("/create", createImage).get("/get", getImage);


module.exports = router;
