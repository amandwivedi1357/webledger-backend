const mongoose = require('mongoose')
require('dotenv').config()
const connection = mongoose.connect(process.env.mongo_url)
mongoose.set("strictQuery", false);
module.exports=  {connection}