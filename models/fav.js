const mongoose = require("mongoose");
const favSchema = mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    userId:{type:Number,required:true},
    prodId:{type:Number,required:true}
  },
  { versionKey: false }
);

const favModel = mongoose.model("favourite", favSchema);
module.exports = { favModel };