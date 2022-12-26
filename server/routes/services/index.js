const router = require("express").Router();
const { getWeather } = require("../../controller/services/weatherApi")
const { getPinterestApi } = require("../../controller/services/pinterestApi")
const { getAllNews } = require("../../controller/services/newsApi")
const { getPokemon } = require("../../controller/services/pokemonApi")


router.get("/weather", getWeather)
router.get("/pinterest", getPinterestApi)
router.get("/news", getAllNews)
router.get("/pokemon", getPokemon)


module.exports = router