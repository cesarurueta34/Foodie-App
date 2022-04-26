const mongoose = require(`./connection`);
const FoodSchema = new mongoose.Schema({
    name: String, 
    visited: {type: Boolean, default: false} ,  
    website: String, 
    image: String, 
    location: String, 
    city: String, 
    price: String, 
    address: String , 
    phone: String , 
    comments: String
} , 
    {timestamps: true}
);

const Food = mongoose.model(`restaurants`, FoodSchema)
module.exports = Food;

