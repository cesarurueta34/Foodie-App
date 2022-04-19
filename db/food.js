const Food = require(`./schema`);
const seedData = require(`./food.json`);

Food.deleteMany({})
    .then(() => {
        return Food.insertMany(seedData)
    })
    .then(res => console.log(res))
    .catch(er => console.log(er))
    .finally(() => {
        process.exit();
    });

    