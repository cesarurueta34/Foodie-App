const express = require(`express`);
const methodOverride = require(`method-override`);

const app = express();


app.set("view engine" , "hbs");
app.use(methodOverride(`_method`));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.get(`/` , (req, res) => {
  res.send(`I am working`)
})

app.listen(5001, () => {
    console.log(`listening on port 5000`)
})