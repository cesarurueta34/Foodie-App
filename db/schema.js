const mongoose = require(`./connection`);
const FoodSchema = new mongoose.Schema({
    name: String, 
    visited: Boolean, 
    website: String, 
    recommend: Boolean, 
    image: String, 
});

const Food = mongoose.model(`restaurants`, FoodSchema)
module.exports = Food;

