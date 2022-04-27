const mongoose = require("mongoose") 
const dominosSchema = mongoose.Schema({
Itemname:{
    type: String,
    minLength: 1,
    maxLength: 15
} ,   
Quantity: Number,
price: {
    type: String,
    minLength: 1,
    maxLength: 13}
})

module.exports = mongoose.model("dominos", dominosSchema) 