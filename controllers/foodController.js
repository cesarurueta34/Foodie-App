const express = require(`express`);
const Food = require(`../db/schema`);
const router = express.Router()

// router.get(`/` , (req, res) => {
//     Food.find({}).then((data) => {
//         res.send(data)
//     })
// })


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

//fetch API using the name of the restaurant
//get response from API 
//get name image we

// Food.create(replace in here what the API shoots out for).then((data) => res.redirect(`/`))
// })

    Food.create(req.body).then((data) => res.redirect(`/`))
})


router.get(`/details/:id` , (req, res) => {
    const id = req.params.id
    Food.findById(id).then((data)=> {
        res.send(data)
    })
})


module.exports = router