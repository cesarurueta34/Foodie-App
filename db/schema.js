const mongoose = require(`./connection`);
const FoodSchema = new mongoose.Schema({
    name: String, 
    visited: {type: Boolean, default: false} ,  
    website: String, 
    recommend: Boolean, 
    image: String, 
});

const Food = mongoose.model(`restaurants`, FoodSchema)
module.exports = Food;

