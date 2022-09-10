const mongoose = require("mongoose");

const BuildingSchema = mongoose.Schema({
   name: String,
   place: Array,
   building: Object,
   kvartir: Object,
   info: Object,
});

module.exports = mongoose.model("Buildings", BuildingSchema);
