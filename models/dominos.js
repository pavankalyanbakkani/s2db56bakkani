const mongoose = require("mongoose") 
const dominosSchema = mongoose.Schema({
Itemname: String,
Quantity: Number,
price: String
})

module.exports = mongoose.model("dominos", dominosSchema) 