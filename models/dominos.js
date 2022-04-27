const mongoose = require("mongoose") 
const dominosSchema = mongoose.Schema({
Itemname:{
    type: String,
    minLength: 1,
    maxLength: 15
} ,   
Quantity: {
    type : Number,
    min: 1,
    max: 2
},
price: String
})

module.exports = mongoose.model("dominos", dominosSchema) 