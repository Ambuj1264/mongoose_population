const mongoose = require("mongoose");

const RiskSchema = mongoose.Schema({
  ID: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },

  description: {
    type: String,
    required: false
  },

  dateAdded: {
    type: Date,
    default: Date.now
  },

  riskRating: {
    type: Number,
    default: 1
  },

  riskCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "riskCatalogs"  // kis model se data lena hai.
    
  }
});

module.exports = mongoose.model("risks", RiskSchema);