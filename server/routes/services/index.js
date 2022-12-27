const router = require("express").Router();
const { getWeather } = require("../../controller/services/weatherApi")
const { getPinterestApi } = require("../../controller/services/pinterestApi")
const { getAllNews } = require("../../controller/services/newsApi")
const { getPokemon } = require("../../controller/services/pokemonApi")
const { GetExcel } = require("../../controller/services/excelGenerator")

router.get("/weather", getWeather)
router.get("/pinterest", getPinterestApi)
router.get("/news", getAllNews)
router.get("/pokemon", getPokemon)
router.post("/excel", GetExcel)


module.exports = router