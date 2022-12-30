const router = require("express").Router();
const { getUser, createUser, signIn, signUp, deleteUser } = require("../controller/userController")


router.route("/").get(getUser).post(createUser);
router.route("/delete/:id").delete(deleteUser)
router.route("/signin").post(signIn)
router.route("/signup").post(signUp)



module.exports = router