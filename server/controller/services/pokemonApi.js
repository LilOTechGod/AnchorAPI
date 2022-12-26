require("dotenv").config()
const { Token } = require("../../model")
const data = require("../../data/pokemon.json")
// let rollbar = require("../../utils/rollbar")

module.exports = {
    getPokemon: async (req, res) => {

        try {

            let { api_key } = req.query
            let compareApi = await Token.findOne({ api_key })
            if (compareApi) {  // console.log(testData.data[0].aqi)
                // rollbar.info("working on the pokemon endpoint", { message: "data was sent successfully" }, compareApi)

                res.status(200).json(data)

            } else {
                // rollbar.error("invalid api keys")

                res.status(200).json({ Error: "Bad Request", err: { Message: "NO API KEY FOUND WITH REQUEST", res: { resolve: "Create an account to get api key  acess" } } })
            }
        } catch (error) {
            // rollbar.error("bad requests")
            res.status(400).json({ error, Message: "bad request" })

        }

    }
}