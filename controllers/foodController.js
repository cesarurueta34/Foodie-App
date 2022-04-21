const express = require(`express`);
const Food = require(`../db/schema`);
const router = express.Router()
const API_KEY = `R3LfXNvOtZBUaHIudjYE2OQiICffJ8mtCv8Ieb43s_jbzMCExqIeq9stWswnHI_3L0PLnU7iYL59SB1Et7HTsR7KqX9x-CY2Jbjj9TmkXAXLXzGMxzKKJnw_3n5fYnYx`

const yelp = require(`yelp-fusion`)
const client = yelp.client(API_KEY)

// router.get(`/` , (req, res) => {
//     Food.find({}).then((data) => {
//         res.send(data)
//     })
// })

//yelp CLIENT ID KEY
// rptN_uieCuDQhPNy2401Lw

//yelp API KEY 
//R3LfXNvOtZBUaHIudjYE2OQiICffJ8mtCv8Ieb43s_jbzMCExqIeq9stWswnHI_3L0PLnU7iYL59SB1Et7HTsR7KqX9x-CY2Jbjj9TmkXAXLXzGMxzKKJnw_3n5fYnYx





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
   // console.log(nameSearch)
    const locSearch = `${req.body.location}`
    //console.log(locSearch)
    client.search({
        term: nameSearch , 
        location: locSearch , 
    }).then((response) => {
        let info = response.jsonBody.businesses[0]
        //console.log(info)
        //the visited is coming up as on object promise and wont return my value
        let x = {
            name: info.name , 
            image: info.image_url , 
            price: info.price , 
            website: info.url

           // visited: `${Food.create(req.body.visited)}`, 
        }
        //console.log(x.visited)
        Food.create(x).then((data) => res.redirect(`/`))
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

//need to figure out what is up with my checkbox and how to make it default
router.put(`/:id` , (req, res) => {
    const id = req.params.id
    Food.findOneAndUpdate({_id: id} , req.body).then((data) => {
        res.redirect(`/`)
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Food.findOneAndRemove({ _id: id }).then((items) => {
        res.redirect("/")
    });
});



module.exports = router