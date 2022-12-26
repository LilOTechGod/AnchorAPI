const router = require("express").Router();
const { getUser, createUser, signIn, signUp } = require("../controller/userController")


router.route("/").get(getUser).post(createUser);

router.route("/signin").post(signIn)
router.route("/signup").post(signUp)


module.exports = router