require("dotenv").config()
const axios = require("axios")
const { Token } = require("../../model")
const { DEV_WEATHERAPIKEY } = process.env

module.exports = {
    getWeather: async (req, res) => {

        try {

            let { city, api_key } = req.query
            let compareApi = await Token.findOne({ api_key })
            if (compareApi) {  // console.log(testData.data[0].aqi)

                axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${DEV_WEATHERAPIKEY}`).then((data) => {
                    let weatherData = data.data
                    res.status(200).json(weatherData)

                }).catch((error) => {
                    res.status(400).json({ error, Message: "bad request" })
                });

            } else {
                res.status(200).json({ Error: "Bad Request", err: { Message: "NO API KEY FOUND WITH REQUEST", res: { resolve: "Create an account to get api key  acess" } } })
            }
        } catch (error) {
            res.status(400).json({ error, Message: "bad request" })
        }

    }
}