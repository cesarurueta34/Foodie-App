const express = require(`express`);
const Food = require(`../db/schema`);
const router = express.Router()

const yelp = require(`yelp-fusion`)
const client = yelp.client(process.env.API_KEY)


router.get(`/` , (req, res) => {
    Food.find({}).then((data) => {
        res.render(`index`, {data})
    })
})

router.get(`/visited` , (req, res) => {
    Food.find({ visited: true}).then((visited) => {
        res.render(`visited` , {visited})
    })
})

router.get(`/wishlist` , (req, res) => {
    Food.find({ visited: false}).then((wishlist) => {
        res.render(`wishlist`, {wishlist})
    })
})

router.get(`/new` , (req, res) => {
    res.render(`new`)
})

router.post(`/` , (req, res) => {
    const nameSearch = `${req.body.name}`
    const locSearch = `${req.body.location}`
    client.search({
        term: nameSearch , 
        location: locSearch , 
    }).then((response) => {
        let info = response.jsonBody.businesses[0]
      let dispAddress = info.location.display_address.join(`, `)
        let x = {
            name: info.name , 
            image: info.image_url , 
            price: info.price , 
            website: info.url , 
            visited: req.body.visited ? true : false , 
            comments: req.body.comments , 
            address: dispAddress , 
            phone: info.display_phone
        }
        .catch((error) => {
            res.render(`index` , (error))
        })
        Food.create(x).then((data) => res.render(`details` , {data} ))
    })
})

router.get(`/details/:id` , (req, res) => {
    const id = req.params.id
    Food.findById(id).then((data)=> {
        res.render(`details`, { data })})
})

router.get(`/edit/:id` , (req, res) => {
    const id = req.params.id
    Food.findById(id).then((data)=> {
        res.render(`edit`, { data })
    })
})

router.put(`/:id` , (req, res) => {
    const id = req.params.id
    Food.findOneAndUpdate({_id: id} , req.body).then((data) => {
        if(data.visited){
            res.redirect(`/visited`)
        } else {
            res.redirect(`/wishlist`)
        }
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Food.findOneAndRemove({ _id: id }).then((items) => {
        if (items.visited) {
            res.redirect(`/visited`)
        } else {
            res.redirect(`/wishlist`)
        }
    });
});

router.delete("/details/:id", (req, res) => {
    const id = req.params.id;
    Food.findOneAndRemove({ _id: id }).then((items) => {
        if (items.visited) {
            res.redirect(`/visited`)
        } else {
            res.redirect(`/wishlist`)
        }
    });
});

module.exports = router