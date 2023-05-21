const mongoose = require("mongoose");

// Category Model
const CategoryModel = new mongoose.Schema({
  type: { type: String, default: "Investment" },
  color: { type: String, default: "#FCBE44" },
});


module.exports = mongoose.model("Category", CategoryModel);
