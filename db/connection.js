const mongoose = require("mongoose")


const mongoURI = 
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : "mongodb+srv://food:food123@cluster0.hqw2u.mongodb.net/foodData?retryWrites=true&w=majority"

mongoose
    .connect(mongoURI)
    .then((instance) => console.log(`Connected to db: ${instance.connections[0].name}`))
    .catch( (err) => console.log(`Connection to db failed due to: ${err}`))
    
module.exports = mongoose