const express = require("express")
const app = express();
const cloudinary = require('cloudinary').v2;
const mongoose = require("mongoose")
require("dotenv").config();
const cors = require("cors")
app.use(express.json())
app.use(cors());


mongoose.connect(process.env.Mongoose)
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connected"); })

const Upload = require("./Models/videos");


cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  secure: true,
});

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});



app.post("/upload", async (req, res) => {

  try {
    const { titleVideo, videoUrl } = req.body;

    const video = await new Upload({ titleVideo, videoUrl });

    await video.save();

    return res.json(video);

  }
  catch (error) {
    console.log(error);
  }


})

app.get("/", (req, res) => {
  res.send("hello")
})

app.get("/videos", async (req, res) => {
  try {
    const findVideos = await Upload.find({})
    return res.json(findVideos);
  }
  catch (error) {
    console.log(error)
  }
})

const SeacrhModel = require("./Models/Search");
app.post("/SEARCH", async (req, res) => {
  try {
    const { q, data } = req.body;

    const Search = await new SeacrhModel({
      q,
      data
    })

    await Search.save();

    return res.json(Search);
  }
  catch (error) {
    console.log(error);
  }
})

app.get("/getSearch" , async(req,res)=>{
  try{
    const findSearch =  await SeacrhModel.find({});
    return res.json(findSearch);
  }
  catch(error){
    console.log(error);
  }
})



