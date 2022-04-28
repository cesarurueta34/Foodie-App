const PORT = process.env.PORT || 5001;
const express = require(`express`);
const methodOverride = require(`method-override`);
const path = require(`path`);
const foodController = require(`./controllers/foodController`);
require(`dotenv`).config()

const app = express();

app.set("view engine" , "hbs");
app.use(methodOverride(`_method`));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, `public`)));
app.use(foodController)

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});