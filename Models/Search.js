const mongoose = require("mongoose");

const SearchSCHema = new mongoose.Schema({
  q:String,
  data:String,
})

const SeacrhModel = mongoose.model("search", SearchSCHema);

module.exports = SeacrhModel;
