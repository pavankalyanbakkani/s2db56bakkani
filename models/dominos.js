const mongoose = require("mongoose") 
const dominoschema = mongoose.Schema({
Item_name: String,
Quantity: Number,
price: String
})

module.exports = mongoose.model("dominos", dominosSchema) 