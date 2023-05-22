const router = require('express').Router();
const  {getLabels} = require("../controllers/labels")


router.route("/").get(getLabels)


module.exports = router
