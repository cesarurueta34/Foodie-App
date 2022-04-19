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
    Food.create(req.body).then((data) => res.redirect(`/`))
})

module.exports = router