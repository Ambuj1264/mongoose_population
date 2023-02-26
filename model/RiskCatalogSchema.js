const mongoose = require("mongoose");

const RiskCatalogSchema = mongoose.Schema({
  RiskId: {
    type: String,
    required: true,
    unique: true
  },

  RiskGrouping: {
    type: String,
    required: true
  },

  dateAdded: {
    type: Date,
    default: Date.now
  },

  Risk: {
    type: String
  },

  CSFFunction: {
    type: String
  },

  Description: {
    type: String
  }
});

module.exports = mongoose.model("riskCatalogs", RiskCatalogSchema);

// allways use in model name end with the s because mongodb create already s
