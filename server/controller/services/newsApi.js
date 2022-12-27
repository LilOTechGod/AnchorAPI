//from usearch 

require("dotenv").config()
const axios = require("axios")
const { Token } = require("../../model")
let rollbar = require("../../utils/rollbar")

module.exports = {
    getAllNews: async (req, res) => {

        try {


            let { search, page, size, api_key } = req.query
            let compareApi = await Token.findOne({ api_key })
            console.log(compareApi)
            if (compareApi) {
                let updatedCount = compareApi.use_count
                updatedCount += 1
                let find = { api_key: api_key }
                let update = { use_count: updatedCount }
                await Token.findOneAndUpdate(find, update, {
                    new: true
                })
                const options = {
                    method: 'GET',
                    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
                    params: {
                        q: search,
                        pageNumber: page,
                        pageSize: size,
                        autoCorrect: 'true',
                        fromPublishedDate: 'null',
                        toPublishedDate: 'null'
                    },
                    headers: {
                        'X-RapidAPI-Key': DEV_RAPIDAPI_KEY,
                        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
                    }
                };

                axios.request(options).then(function (response) {
                    let newsData = response.data
                    res.status(200).json(newsData)
                }).catch(function (error) {
                    res.status(400).json({ error, Message: "bad request" })
                    // rollbar.error("endpoint failed, bad request")

                });


            } else {
                // rollbar.error("invalid api keys")

                res.status(200).json({ Error: "Bad Request", err: { Message: "NO API KEY FOUND WITH REQUEST", res: { resolve: "Create an account to get api key  acess" } } })
            }
        } catch (error) {
            res.status(400).json({ error, Message: "bad request" })
            // rollbar.error("endpoint failed, bad request")

        }

    }
}

