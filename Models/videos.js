const mongoose = require("mongoose")

const videoSchema = mongoose.Schema({
  titleVideo: String,
  videoUrl: String,
  poster: String
})

const videoModel = mongoose.model("videos" , videoSchema);

module.exports =  videoModel;