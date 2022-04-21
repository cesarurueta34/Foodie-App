const express = require(`express`);
const methodOverride = require(`method-override`);
const path = require(`path`);
const foodController = require(`./controllers/foodController`);

const app = express();


app.set("view engine" , "hbs");
app.use(methodOverride(`_method`));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, `public`)));
app.use(foodController)




app.listen(5001, () => {
    console.log(`listening on port 5001`)
})