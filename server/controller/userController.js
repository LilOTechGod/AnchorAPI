require("dotenv").config()
//import depenedencies and files 
const { User, Token } = require("../model")
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN
const { generateApiKey } = require('generate-api-key');
const bcrypt = require("bcrypt")
//user endpoint
module.exports = {
    createUser: async (req, res) => {

        try {
            let userData = await new User(req.body).save()
            res.status(200).json(userData)
        } catch (error) {
            res.status(400).json({ error, message: "Bad request check body" })
            console.log(error)
        }


    },
    getUser: async (req, res) => {
        try {
            let userData = await User.find().populate("access_token_id")
            res.status(200).json(userData)
        } catch (error) {
            res.status(400).json(error)


        }
    },
    signIn: async (req, res) => {
        try {
            const { email, password } = req.body

            console.log(password)


            let userData = await User.findOne({ email }).populate("access_token_id")
            let emailExists = userData.email
            let nameExist = userData.first_name
            let lastExist = userData.last_name
            let accesskey = userData.access_token_id.api_key
            console.log(userData.password)
            let checkPassword = await bcrypt.compare(password, userData.password)
            console.log(checkPassword)

            if (checkPassword) {

                //great a session using jwt, creats a token to be sent to the front end.
                const token = jwt.sign({ email: emailExists, firstName: nameExist, lastName: lastExist, apiKey: accesskey }, secret, { expiresIn: "1h" });
                res.status(200).json({ token })
            }


            res.status(200).json({ token })
        } catch (error) {
            res.status(400).json({ error, message: "does not exist, Email or Password is incorrect" })


        }
    },
    signUp: async (req, res) => {
        try {
            let apikey = generateApiKey({ min: 30 })
            //create api key
            let creatApiData = await new Token({ api_key: apikey }).save()
            //retirve api key

            let apiData = await Token.findOne({ api_key: apikey }).populate("user_id")
            let accessTokenId = apiData.id

            const { first_name, last_name, email, password } = req.body
            console.log(password)
            let hashed = await bcrypt.hash(password, 10);
            console.log(hashed)


            let userData = await new User({ first_name: first_name, last_name: last_name, email: email, password: hashed, access_token_id: accessTokenId }).save()

            res.status(200).json(userData)

        } catch (error) {
            res.status(400).json(error)

        }
    },


}

