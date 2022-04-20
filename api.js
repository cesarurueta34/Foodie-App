//yelp CLIENT ID KEY
// rptN_uieCuDQhPNy2401Lw

//yelp API KEY 
//R3LfXNvOtZBUaHIudjYE2OQiICffJ8mtCv8Ieb43s_jbzMCExqIeq9stWswnHI_3L0PLnU7iYL59SB1Et7HTsR7KqX9x-CY2Jbjj9TmkXAXLXzGMxzKKJnw_3n5fYnYx


API_KEY = `R3LfXNvOtZBUaHIudjYE2OQiICffJ8mtCv8Ieb43s_jbzMCExqIeq9stWswnHI_3L0PLnU7iYL59SB1Et7HTsR7KqX9x-CY2Jbjj9TmkXAXLXzGMxzKKJnw_3n5fYnYx`

const yelp = require(`yelp-fusion`)
const client = yelp.client(API_KEY)

client.search({
    term: `Dewey's Pizza` , 
    location: `St. Louis`
}).then(response => {
    console.log(response.jsonBody.businesses[0])
}).catch(e => {
    console.log(e)
})