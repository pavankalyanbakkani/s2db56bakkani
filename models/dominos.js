const mongoose = require("mongoose") 
const dominosSchema = mongoose.Schema({
Itemname:{
    type: String,
    minLength: 1,
    maxLength: 15
} ,   
Quantity: Number,
price: String
})

module.exports = mongoose.model("dominos", dominosSchema) 